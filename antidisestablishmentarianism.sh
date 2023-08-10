#!/bin/sh

npm run deploy
git checkout gh-pages
git pull
touch CNAME
echo "www.modulara.com" > CNAME
git add CNAME
git commit -m "CNAME update"
git push
git checkout mainframe