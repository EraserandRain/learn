#!/usr/bin/env zsh

local HALO='pwd'

function foo() {
	foo2
}

function foo2() {
	echo haha
}

function main() {
	mkfifo cmd_exec_pipe
	source ip a >cmd_exec_pipe &
	<cmd_exec_pipe
}

# main
main
