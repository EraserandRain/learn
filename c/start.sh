#!/usr/bin/env bash

CSOURCE="main.c"

# main
echo "Cppcheck results:"
cppcheck ${CSOURCE}
echo "GCC results:"
gcc ${CSOURCE}
rm -rf pipe && mkfifo pipe
./a.out >pipe &
echo -e "Exec Results:"
cat pipe
