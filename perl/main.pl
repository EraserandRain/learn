#!/usr/bin/env perl
use strict;
use warnings;
BEGIN { unshift @INC,'module';};
use Foo ':all';
use File::Tee qw(tee);



my ($pcieVer, $stylusTrunkVerPrefix) = ("","");

# main
($pcieVer, $stylusTrunkVerPrefix) = ("hello","world");

print "msg: $pcieVer $stylusTrunkVerPrefix";
