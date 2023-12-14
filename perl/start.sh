#!/usr/bin/env bash
for var in $*
do
	echo $var
done
for var2 in $@
do
	echo $var2
done
