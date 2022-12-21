#!/usr/bin/env zsh

local HALO='pwd'

function foo() {
	foo2
}

function foo2() {
	echo haha
}

local Device="Docker $(hostname -s)"

function main() {
	echo $Device
}

# main
main
