#!/usr/bin/env bash

CSOURCE="main.c"

# main 
cppcheck ${CSOURCE}
gcc ${CSOURCE}
rm -rf pipe && mkfifo pipe
./a.out > pipe &
echo -e "Results:"
cat pipe

