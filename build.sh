#!/usr/bin/env bash
# exit on error
set -o errexit

yarn
yarn add typescript --dev
yarn build
yarn typeorm migration:run -d dist/data-source
