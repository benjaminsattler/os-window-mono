#!/bin/sh

set -euxo pipefail

[ $# -ne 1 ] && echo "Missing release tag" && exit 1;

PAGES_BRANCH=master
SCRIPTPATH=$(realpath $(dirname $0))/
ROOTPATH=$(realpath ${SCRIPTPATH}../../)/
HEAD_TAG="${1}"

PAGES_DIST_SUBFOLDER=$(realpath ${ROOTPATH}"docs/")
NUXT_ENV_GTM_OSW_PAGE_VERSION="${HEAD_TAG}" yarn --cwd "${ROOTPATH}" workspace os-window-pages generate
rm -rf "${PAGES_DIST_SUBFOLDER}" 
cp -r "${SCRIPTPATH}"dist/ "${PAGES_DIST_SUBFOLDER}"
