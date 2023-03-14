#!/usr/bin/env bash
# exit on error
set -o errexit

yarn
npm install -g tsc
yarn build
yarn typeorm migration:run -d dist/data-source
