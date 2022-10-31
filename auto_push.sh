#!/usr/bin/env bash
export LC_ALL=C
current_date=$(date -d '0 day' '+%Y%m%d')
set -e
git add .
git commit -m "test: Auto Deploy ${current_date}"
git push
cd -
echo 'deploy success!'
exit 0
