#!/usr/bin/env perl
use strict;
use warnings;
BEGIN { unshift @INC,'module';};
use Foo ':all';
use File::Tee qw(tee);


tee(STDOUT,'>','1.log');

print("hello world\n");
system('ls');


# main

