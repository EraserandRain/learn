#!/usr/bin/env bash

function generate_logfile() {
    local filename_prefix="${1}"
    local filename_suffix="$(date +%y%m%d)"
    local log_dir="${2:-.}/log/$filename_suffix"
    local counter=0
    local filename="${filename_prefix}_${filename_suffix}.log"

    while [ -f "${log_dir}/${filename}" ]; do
        ((counter++))
        filename="${filename_prefix}_${filename_suffix}_${counter}.log"
    done
        mkdir -p $log_dir
   
    [[ -f "${filename}" ]] && {
    }
}

# Main

LOGFILE=$(generate_logfile "result_Nixus")

echo haha >$LOG
