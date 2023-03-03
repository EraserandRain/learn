#!/usr/bin/env bash
cppcheck -j 4 --enable=all --inconclusive  --xml --xml-version=2 . 2> cppcheck.xml