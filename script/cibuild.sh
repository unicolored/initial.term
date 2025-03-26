#! /bin/bash

set -e

yarn build:prod
yarn docs:build
