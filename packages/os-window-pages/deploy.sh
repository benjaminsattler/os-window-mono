#!/bin/sh

set -euxo pipefail

[ $# -ne 1 ] && echo "Missing release tag" && exit 1;

PAGES_BRANCH=master
SCRIPTPATH=$(realpath $(dirname $0))/
ROOTPATH=$(realpath ${SCRIPTPATH}../../)/
HEAD_TAG="${1}"

PAGES_DIST_SUBFOLDER=$(realpath ${ROOTPATH}"dist/os-window-pages/")
NUXT_ENV_GTM_OSW_PAGE_VERSION="${HEAD_TAG}" yarn --cwd "${ROOTPATH}" nx run os-window-pages:generate
rm -rf "${PAGES_DIST_SUBFOLDER}" 
cp -r "${SCRIPTPATH}"dist/ "${PAGES_DIST_SUBFOLDER}"
