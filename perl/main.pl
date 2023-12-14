#!/usr/bin/env perl
use strict;
use warnings;
BEGIN { unshift @INC, 'module'; }
use Foo ':all';
use File::Tee qw(tee);

my $version = "trunk";
# my $version = "R7_1";
# my $version = "R7_2";
# my $version = "R6";

if ( $version =~ /^(R7_1|R7_2|trunk)$/ ) {
    print("version: $version \n");
}
