#!/usr/bin/env node

const shell = require('shelljs');

shell.exec('pwd').stdout;
shell.exec('netstat -ntlp').stdout;