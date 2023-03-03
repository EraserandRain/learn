#!/usr/bin/env bash
function is_cmd_exist() {
  [[ -z $1 ]] && echo "Usage: is_cmd_exist [command1] [command2] ..." && return 1
  for cmd in "$@"; do
    if [[ $cmd == $# ]]; then
      which $cmd >/dev/null 2>&1
      [[ $? -eq 0 ]] && return 0 || return 2
    else
      which $cmd >/dev/null 2>&1
      [[ $? -eq 0 ]] && continue || return 2
    fi
  done
}

is_cmd_exist ls  && echo true || echo false
is_cmd_exist ppp  && echo true || echo false
