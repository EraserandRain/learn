#!/usr/bin/env bash
export LC_ALL=C
current_date=$(date -d '0 day' '+%Y%m%d')
set -e
git init
git add -A
git commit -m "test: Auto Deploy ${current_date}"
git push -f git@github.com:EraserandRain/code_learning.git main:main
cd -
echo 'deploy success!'
exit 0
