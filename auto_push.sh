#!/usr/bin/env bash
#
# Description: Auto Push
# 
# Usage: cd learn/; ./auto_push.sh

export LC_ALL=C
set -e

CURRENT_DATE=$(date -d '0 day' '+%Y%m%d')

function main() {
    git add .
    git commit -m "test: Auto Deploy ${CURRENT_DATE}"
    git push
    cd -
    echo 'deploy success!'
    exit 0
}

# Main
main
