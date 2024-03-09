#!/usr/bin/env bash
rm -rf dist
npm run build
cd dist
git init
git add .
git commit -m deploy
git branch -M main
git remote add origin git@github.com:webpanck/get-chips-review.git
git push -f origin main
cd -