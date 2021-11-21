#!/bin/sh

set -euxo pipefail

FULL="${FULL:-0}";

PAGES_BRANCH=master
SCRIPTPATH=$(realpath $(dirname $0))/
ROOTPATH=$(realpath ${SCRIPTPATH}../../)/
HEAD_HASH=`git -C "${SCRIPTPATH}" show --pretty="%H" --no-patch`
HEAD_TAG=$(git -C "$SCRIPTPATH" tag --points-at)

HEAD_REF="${HEAD_TAG}"
if [[ "${HEAD_TAG}" == "" ]]; then
  HEAD_REF="${HEAD_HASH}"
fi

NOW=`date "+%s"`
PAGES_PACKAGE_SUBFOLDER="packages/os-window-pages/"
PAGES_DIST_SUBFOLDER="dist/os-window-pages/"
NUXT_ENV_GTM_OSW_PAGE_VERSION="${HEAD_REF}" yarn --cwd "${ROOTPATH}" nx run os-window-pages:generate
cp -r "${SCRIPTPATH}"dist/ "${ROOTPATH}dist/os-window-pages/"
git -C "${ROOTPATH}" add -- "${ROOTPATH}dist/os-window-pages/"
git -C "${ROOTPATH}" commit -m "Deploy ${HEAD_REF}"

if [[ "${FULL}" == "1" ]]; then
  git -C "${ROOTPATH}" push origin "${PAGES_BRANCH}":"${PAGES_BRANCH}"
  exit 0
fi

set +x
echo "Please push the new release manually using"
echo "> git -C ${ROOTPATH} push origin ${PAGES_BRANCH}:${PAGES_BRANCH}"
echo "Or preview the new release using"
echo "> git -C ${ROOTPATH} checkout ${PAGES_BRANCH}"
