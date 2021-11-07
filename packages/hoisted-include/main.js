const fs = require('fs');
const send = require('send');

module.exports = (roots, prefix) => (req, res, next) => {
  const absoluteRoots = roots.map(relativeRoot => fs.realpathSync(`${process.cwd()}/${relativeRoot}`));
  const needle = req.originalUrl.replace(prefix, '');
  let matched;
  while (absoluteRoots.length > 0 && matched === undefined) {
    const root = absoluteRoots.shift();
    const candidate = `${root}/${needle}`;
    if (fs.existsSync(candidate) && fs.statSync(candidate).isFile()) {
      matched = candidate;
    }
  }
  if (matched) {
    send(req, matched).pipe(res);
  } else {
    console.warn(`unresolved dependency: ${needle}`);
    next();
  };
};
