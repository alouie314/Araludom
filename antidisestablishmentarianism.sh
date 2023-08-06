#!/bin/sh

npm run deploy
git checkout gh-pages
git pull
git push
git checkout main