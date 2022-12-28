#!/usr/bin/python3

import sys
import datetime
import os

YEAR="2022"
DATE=sys.argv[1]
DAILY=f"/mnt/storage1/PTP_DAILYBUILD/{YEAR}.{DATE[0]}{DATE[1]}.{DATE[2]}{DATE[3]}"


def cmd(command):
    print(command)
    os.system(command)
    pass

def review_stylus():
    logs=os.listdir()
    logs.remove('sync_log.txt')
    for log in logs:
        if os.path.isdir(log) or (os.path.splitext(log)[0].find("VS2015")==-1):
            print(log,"is remove")
            logs.remove(str(log))
    print(logs)
    pass

def review_pcie():
    pass


def main():
    daily_task=[]
    os.chdir(f"{DAILY}")
    for chosen in os.listdir():
       if os.path.isdir(chosen):
        daily_task.append(chosen)
    for chosen in daily_task:
        if chosen.find('STYLUS')!=-1:
            os.chdir(f"{DAILY}/{chosen}")
            print(f"{'*'*60}\n{chosen}\n{'*'*60}")
            review_stylus()
    pass

main()
