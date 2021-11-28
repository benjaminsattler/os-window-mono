#!/usr/bin/env node

const startTimestamp = Date.now();
process.exitCode = 1;
let LOGFILE = null;

require('dotenv').config();

process.on('uncaughtException', bail);
process.on('SIGTERM', bail);
process.on('exit', bail);

const fs = require('fs');
const ROOTDIR = fs.realpathSync(`${__dirname}/../`);

const child_process = require('child_process');
const { stdout } = require('process');
const path = require('path');
const semver = require('semver');
const { version: current } = require(`${ROOTDIR}/package.json`);
 
const PKG_EXEC = `yarn --cwd ${ROOTDIR}`;
const GIT_EXEC = `git -C ${ROOTDIR} --no-pager`;
const GIT_TAG_MESSAGE = version => `Version ${version}`;
const GIT_RELEASE_COMMIT_MESSAGE = version => `Release version ${version}`;
const GITHUB_RELEASE_TITLE = GIT_TAG_MESSAGE;
const NPM_USERNAME = process.env.NPM_USERNAME;
const NPM_PASSWORD = process.env.NPM_PASSWORD;
const NPM_USE_2FA = Object.keys(process.env).includes('NPM_USE_2FA') ? process.env.NPM_USE_2FA === '1' : true;
const RELEASE_TYPE = process.env.RELEASE_TYPE;
const GITHUB_COMPARISON_URL = (previous, next) => `https://github.com/benjaminsattler/os-window-mono/compare/${previous}...${next}`;

function generateLogName(version) {
  return `release-${version}-${Date.now()}.log`;
}

function openLogfile(filename) {
  const path = fs.realpathSync(`${ROOTDIR}/log/`);
  const f = fs.createWriteStream(`${path}/${filename}`, {mode : 0o755, flags: 'a+'});
  return f;
}

function closeLogfile(stream) {
  if (stream !== null) {
    stream.end();
  }
}

function bail() {
  try {
    closeLogfile(LOGFILE);
  } catch (e) {
    process.stderr.write('UNABLE TO CLOSE LOGFILE!\n');
    process.stderr.write(e.message);
    process.stderr.write(e.stack);
  } finally {
    LOGFILE = null;
  }
}

function print({emoji = null, txt}) {
  const dateTime = new Date(Date.now()).toISOString();
  let out = `${emoji} ${txt}`;
  if (emoji === null) {
    out = `${txt}`;
  }
  const line = `${dateTime}: ${out}\n`;
  stdout.write(line);
  if (LOGFILE !== null) {
    try {
      LOGFILE.write(line);
    } catch (e) {
      stdout.write(`UNABLE TO WRITE TO LOGFILE: ${e.message}: ${e.stack}`);
    }
  }
}

async function lint() {
  return new Promise((resolve, reject) => {
    const child = child_process.exec(`${PKG_EXEC} lint-all`);
    child.stdout.pipe(LOGFILE, {end: false});
    child.stderr.pipe(LOGFILE, {end: false});
    child.on('error', reject);
    child.on('exit', resolve);
  });
}

async function test() {
  return new Promise((resolve, reject) => {
    const child = child_process.exec(`${PKG_EXEC} test`);
    child.stdout.pipe(LOGFILE, {end: false});
    child.stderr.pipe(LOGFILE, {end: false});
    child.on('error', reject);
    child.on('exit', resolve);
  });
}

async function gitIsClean() {
  return new Promise((resolve, reject) => {
    const child = child_process.exec(`${GIT_EXEC} diff --quiet HEAD`);
    child.stdout.pipe(LOGFILE, {end: false});
    child.stderr.pipe(LOGFILE, {end: false});
    child.on('error', reject);
    child.on('exit', (code) => {
      return code === 0 ? resolve(code) : reject(new Error("Git worktree is not clean. Please clean your worktree and try again"));
    });
  })
}

function nextVersion(currentVersion, semverIncrement) {
  return semver.inc(currentVersion, semverIncrement);
}

async function gitTag(tag) {
  return new Promise((resolve, reject) => {
    const child = child_process.exec(`${GIT_EXEC} tag --annotate --message "${GIT_TAG_MESSAGE(tag)}" ${tag}`);
    child.stderr.pipe(LOGFILE, {end: false});
    child.stdout.pipe(LOGFILE, {end: false});
    child.on('error', reject);
    child.on('exit', (code) => {
      if (code !== 0) {
        reject(new Error(`Unable to create git tag ${tag}`));
      }
      resolve();
    });
  });
}

async function gitPushTag(tag) {
  return new Promise((resolve, reject) => {
    const child = child_process.exec(`${GIT_EXEC} push origin ${tag}`);
    child.stderr.pipe(LOGFILE, {end: false});
    child.stdout.pipe(LOGFILE, {end: false});
    child.on('error', reject);
    child.on('exit', (code) => {
      return code === 0 ? resolve(code) : reject(new Error(`Unable to push git tag ${tag}`));
    });
  });
}

function getChangelog() {
  const changelogFileContents = fs.readFileSync(`${ROOTDIR}/CHANGELOG.md`);
  const latestChangelog = [...new String(changelogFileContents).matchAll(/##\s*\[Unreleased\]\s*(.*?)(?=\n\<hr\>)/gms)];
  
  if (latestChangelog === null || latestChangelog.length === 0 || latestChangelog[0].length < 2) {
    throw('Failed to extract unreleated changelog');
  }
  return latestChangelog[0][1];
}

function addReleaseToChangelog(previousTag, next, nextTag) {
  const today = new Date(Date.now());
  const todayYear = `${today.getFullYear()}`;
  const todayMonth = `${today.getMonth() + 1}`.padStart(2, '0');
  const todayDate = `${today.getDate()}`.padStart(2, '0');

  const changelogFileContents = fs.readFileSync(`${ROOTDIR}/CHANGELOG.md`);
  let latestChangelog = new String(changelogFileContents);
  latestChangelog = latestChangelog.replace(/##\s*\[Unreleased\]/g, `## [Unreleased]\n\n<hr>\n\n## [${next}] - ${todayYear}-${todayMonth}-${todayDate}`);
  latestChangelog = latestChangelog.replace(/\[Unreleased\]:.*/g, `[Unreleased]: ${GITHUB_COMPARISON_URL(nextTag, 'HEAD')}\n[${next}]: ${GITHUB_COMPARISON_URL(previousTag, nextTag)}`);
  fs.writeFileSync(`${ROOTDIR}/CHANGELOG.md`, latestChangelog);
}

async function gitCommitChangelog() {
  return new Promise((resolve, reject) => {
    const child = child_process.exec(`${GIT_EXEC} add CHANGELOG.md && ${GIT_EXEC} commit --amend --no-edit --no-verify`);
    child.stderr.pipe(LOGFILE, {end: false});
    child.stdout.pipe(LOGFILE, {end: false});
    child.on('error', reject);
    child.on('exit', (code) => {
      return code === 0 ? resolve(code) : reject(new Error(`Unable to commit CHANGELOG.md`));
    });
  });
}

async function gitReleaseCommit(version) {
  return new Promise((resolve, reject) => {
    const child = child_process.exec(`${GIT_EXEC} commit --allow-empty --no-verify --signoff --only --no-edit -m "${GIT_RELEASE_COMMIT_MESSAGE(version)}"`);
    child.stderr.pipe(LOGFILE, {end: false});
    child.stdout.pipe(LOGFILE, {end: false});
    child.on('error', reject);
    child.on('exit', (code) => {
      return code === 0 ? resolve(code) : reject(new Error(`Unable to create git release commit for version ${version}`));
    });
  });
}

async function githubCreateRelease(nextRelease) {
  const changelog = getChangelog();
  const repoUrl = 'http://github.com/benjaminsattler/os-window-mono';
  const queryParameters = {
    tag: nextRelease,
    title: GITHUB_RELEASE_TITLE(nextRelease),
    body: changelog,
  };
  const url = new URL(`${repoUrl}/releases/new`);
  url.search = new URLSearchParams(queryParameters);
  
  const child = child_process.exec(`open "${url.toString()}"`);
  child.stderr.pipe(LOGFILE, {end: false});
  child.stdout.pipe(LOGFILE, {end: false});
  child.on('error', (e) => { throw e; });
  child.on('exit', (code) => {
    if (code === 0) {
      return code;
    }
    LOGFILE.write('Unable to open GitHub web UI in order to create new Release.\n');
    LOGFILE.write('Please visit the following URL yourself in order to continue:\n');
    LOGFILE.write(`> ${url.toString()}\n`);
    LOGFILE.write('\n');
    throw(new Error(`Unable to push git tag ${tag}`));
  });
  return child;
}

async function getTmpFilename() {
  return new Promise((resolve, reject) => {
    child_process.exec(`mktemp`, (error, stdout, stderr) => {
      if (error !== null) {
        reject(error);
        return;
      }
      LOGFILE.write(stdout);
      LOGFILE.write(stderr);
      resolve(stdout.trim());
    });
  });
}

async function openOtpEditor(file) {
  return new Promise((resolve, reject) => {
    const child = child_process.exec(`open -tWn ${file}`);
    child.stderr.pipe(LOGFILE, {end: false});
    child.stdout.pipe(LOGFILE, {end: false});
    child.on('error', reject);
    child.on('exit', (code) => {
      return code === 0 ? resolve(code) : reject(new Error(`Unable to open Editor with OTP File.`));
    });
  });
}

async function attempt2FaNpmLogin(otpFilename) {
  return new Promise((resolve, reject) => {
    const child = child_process.exec(`{ echo '${NPM_USERNAME}'; sleep 2; echo '${NPM_PASSWORD}'; sleep 2; cat ${otpFilename}; echo '\n'; } | ${PKG_EXEC} npm login --publish`);
    child.stderr.pipe(LOGFILE, {end: false});
    child.stdout.pipe(LOGFILE, {end: false});
    child.on('error', reject);
    child.on('exit', (code) => (code === 0) ? resolve(code) : reject(code));
  });
}

async function verifyNpmLogin(otpFilename) {
  return new Promise((resolve, reject) => {
    const child = child_process.exec(`${PKG_EXEC} npm whoami --publish`);
    child.stderr.pipe(LOGFILE, {end: false});
    child.stdout.pipe(LOGFILE, {end: false});
    child.on('error', reject);
    child.on('exit', (code) => (code === 0) ? resolve(code) : reject(code));
  });
}

async function npmLoginWith2Fa() {
  let bail = false;
  const onClose = () => { bail = true; reject();};
  return new Promise(async (resolve, reject) => {
    process.stdin.once('close', onClose);
    const otpFilename = await getTmpFilename();
    while(!bail) {
      try {
        print({txt: `Please put your OTP in this temporary file:`, emoji: '🔏'})
        print({txt: `> ${otpFilename}`, emoji: '🔏'});
        print({txt: `Waiting until the editor process has terminated`, emoji: '⏳'});
        await openOtpEditor(otpFilename);
        print({txt: 'Editor was closed, attempting login', emoji: '🔑'});
        await attempt2FaNpmLogin(otpFilename);
      } catch (e) {
        print({ txt: `Error when logging in into NPM with 2FA, please try again`, emoji: '🚫'});
        continue;
      }
      bail = true;
      resolve();
    }
  }).finally(() => process.off('close', onClose));
}

async function npmLogin() {
  return new Promise((resolve, reject) => {
    const child = child_process.exec(`{ echo '${NPM_USERNAME}'; sleep 2; echo '${NPM_PASSWORD}'; } | ${PKG_EXEC} npm login --publish`);
    child.stderr.pipe(LOGFILE, {end: false});
    child.stdout.pipe(LOGFILE, {end: false});
    child.on('error', reject);
    child.on('exit', (code) => {
      return code === 0 ? resolve(code) : reject(new Error(`Unable to login into npm registry`));
    });
  });
}

async function bumpPackageVersions(tag) {
  return new Promise((resolve, reject) => {
    const child = child_process.exec(`${PKG_EXEC} workspaces foreach version ${tag}`);
    child.stderr.pipe(LOGFILE, {end: false});
    child.stdout.pipe(LOGFILE, {end: false});
    child.on('error', reject);
    child.on('exit', (code) => {
      return code === 0 ? resolve(code) : reject(new Error(`Unable to bump package versions to ${tag}`));
    });
  });
}

async function commitBumpedPackageVersions() {
  return new Promise((resolve, reject) => {
    const child = child_process.exec(`${GIT_EXEC} add package.json packages/*/package.json yarn.lock .yarn/versions/* && ${GIT_EXEC} commit --amend --no-edit --no-verify`);
    child.stderr.pipe(LOGFILE, {end: false});
    child.stdout.pipe(LOGFILE, {end: false});
    child.on('error', reject);
    child.on('exit', (code) => {
      return code === 0 ? resolve(code) : reject(new Error(`Unable to commit package version bumps`));
    });
  });
}

async function npmPublish() {
  return new Promise((resolve, reject) => {
    const child = child_process.exec(`${PKG_EXEC} workspaces foreach --no-private npm publish --tag latest`);
    child.stderr.pipe(LOGFILE, {end: false});
    child.stdout.pipe(LOGFILE, {end: false});
    child.on('error', reject);
    child.on('exit', (code) => {
      return code === 0 ? resolve(code) : reject(new Error(`Unable to publish npm package(s)`));
    });
  });
}

async function pagesBuild(tag) {
  return new Promise((resolve, reject) => {
    const child = child_process.exec(`./packages/os-window-pages/deploy.sh "${tag}"`);
    child.stderr.pipe(LOGFILE, {end: false});
    child.stdout.pipe(LOGFILE, {end: false});
    child.on('error', reject);
    child.on('exit', (code) => {
      return code === 0 ? resolve(code) : reject(new Error(`Unable to build pages project`));
    });
  });
}

async function commitPages() {
  return new Promise((resolve, reject) => {
    const child = child_process.exec(`${GIT_EXEC} add dist/os-window-pages && ${GIT_EXEC} commit --amend --no-edit --no-verify`);
    child.stderr.pipe(LOGFILE, {end: false});
    child.stdout.pipe(LOGFILE, {end: false});
    child.on('error', reject);
    child.on('exit', (code) => {
      return code === 0 ? resolve(code) : reject(new Error(`Unable to commit pages`));
    });
  });
}

function usage() {
  const scriptname = `./${path.basename(__filename)}`;
  const help = `
Release script for os-window monorepo.
Use this script to create a new public version of os-window and its components.

Example usage: RELEASE_TYPE=<patch|minor|major> NPM_USERNAME=user NPM_PASSWORD=pass ${scriptname}

Environment Variables:

This script expects a number of environment variables to be available:

  RELEASE_TYPE  Specifies which kind of release to create according to
                semantic versioning (https://semver.org/). (mandatory)
                Supported values: patch, minor, major
  
  NPM_USERNAME  Specifies the username to use to log in to the npm registry
                (mandatory)

  NPM_PASSWORD  Specifies the password to use to log in to the npm registry
                (mandatory)
  
  NPM_USE_2FA   Specifies whether Two-Factor Authentication shall be used
                during login into the npm registry. (optional, defaults to 1)
                Supported values: 0, 1

Invocation Examples:

  > RELEASE_TYPE=patch NPM_USERNAME=npmuser NPM_PASSWORD=npmassword ${scriptname}
  To create a new release where the patch version is bumped.

  > RELEASE_TYPE=minor NPM_USERNAME=npmuser NPM_PASSWORD=npmassword 
  To create a new release where the minor version is bumped.

  > RELEASE_TYPE=major NPM_USERNAME=npmuser NPM_PASSWORD=npmassword 
  To create a new release where the major version is bumped.`;
  print({txt: help, emoji: 'ℹ️'});
}

const mandatory = [
  'RELEASE_TYPE',
  'NPM_USERNAME',
  'NPM_PASSWORD',
];

const missing = mandatory.filter(v => !(Object.keys(process.env).includes(v)));
if (missing.length > 0) {
  print({txt: `The following environment variables need to be available: ${missing.join(', ')}!`, emoji: '⛔️'});
  usage();
  process.exitCode = 1;
  return;
}

print({txt: `Preparing a new Release`, emoji: '⏩'});
const currentTag = `v${current}`;
const next = nextVersion(current, RELEASE_TYPE);
const nextTag = `v${next}`;

(async () => {
  try {
    const logfileName = generateLogName(next);
    LOGFILE = openLogfile(logfileName);

    print({txt: `Logfile for this run will be: log/${logfileName}`, emoji: '📜'});
    print({txt: `Run this command for a live view of the logfile:`, emoji: '📿'});
    print({txt: `> tail -f ${ROOTDIR}/log/${logfileName}`, emoji: '📿'});
    print({txt: `NPM 2 Factor Authentication is ${NPM_USE_2FA ? 'enabled' : 'disabled'}`, emoji: '📿'});
    print({txt: `Current is ${current}, next will be ${next}`, emoji: '🤓'});

    print({txt: `Checking if Git is clean`, emoji: '🚦'});
    await gitIsClean();

    print({txt: `Checking if Linter is satisfied`, emoji: '👮'});
    await lint();

    print({txt: `Checking if Tests are green`, emoji: '🐛'});
    await test();

    print({txt: 'Verifying NPM login', emoji: '🔎'});
    try {
      await verifyNpmLogin();
    } catch (e) {
      print({txt: `Logging in into NPM`, emoji: '🔐'});
      if (NPM_USE_2FA) {
        await npmLoginWith2Fa();
      } else {
        await npmLogin();
      }
      print({txt: 'Verifying NPM login', emoji: '🔎'});
      await verifyNpmLogin();
    }
    
    print({txt: `Creating Release Commit`, emoji: '🎬'});
    await gitReleaseCommit(next);

    print({txt: `Bumping Versions`, emoji: '⏫'});
    await bumpPackageVersions(next);

    print({txt: `Adding bumped Versions to Release Commit`, emoji: '➕'});
    await commitBumpedPackageVersions();

    print({txt: `Building Pages`, emoji: '📚'});
    await pagesBuild(next);

    print({txt: `Adding pages to Release Commit`, emoji: '➕'});
    await commitPages();

    print({txt: `Updating CHANGELOG.md`, emoji: '📜'});
    await addReleaseToChangelog(currentTag, next, nextTag);

    print({txt: `Adding CHANGELOG.md to Release Commit`, emoji: '➕'});
    await gitCommitChangelog();

    print({txt: `Creating Release Git Tag`, emoji: '🎯'});
    await gitTag(nextTag);

    print({txt: `Publishing Packages to NPM`, emoji: '🌍'});    
    await npmPublish();

    print({txt: `Pushing Release Git Tag to GitHub`, emoji: '🌎'});
    await gitPushTag(nextTag);

    print({txt: `Creating GitHub Release`, emoji: '🌏'});
    await githubCreateRelease(currentTag, nextTag);

    process.exitCode = 0;
  } catch (e) {
    print({txt: `Problem: ${e.message}`, emoji: '⛔️'});
    print({txt: 'See Logfile for more details.', emoji: '📿'})
    LOGFILE.write(e.stack);
    process.exitCode = 1;
  } 
  print({txt: `Build runtime: ${(Date.now() - startTimestamp)/1000} seconds`, emoji: '⏰'});

  if (process.exitCode === 0) {
    print({txt: `We're done, a new Release has been published (${next})`, emoji: '🍻'});
  }
})();
