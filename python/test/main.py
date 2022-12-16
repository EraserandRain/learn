#!/usr/bin/env python3

import datetime
import os
import subprocess
import sys
import re
from include import cmd,grep

log_file='default.log'

class Logger(object):
    def __init__(self, filename='default.log', stream=sys.stdout):
        self.terminal = stream
        self.log = open(filename, 'a')

    def write(self, message):
        self.terminal.write(message)
        self.log.write(message)

    def flush(self):
        pass


class Halo():
    def __init__(self,name=haname):
        self.name = name
        

def main():
    haname='haha'
    print(Halo.name)
    # now it works
    print('print something')
    print("output")











if __name__ == '__main__':
    main()
