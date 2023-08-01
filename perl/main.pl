#!/usr/bin/env perl
use strict;
use warnings;
BEGIN { unshift @INC,'module';};
use Foo ':all';
use File::Tee qw(tee);


my $build_server = `hostname`;
$build_server =~ s/\n//g;
# main
# sub getMail(){

# }
print "================================================\n"
  ."Start Build Step ... \n"
  ."================================================\n";
print "Build Server: ".$build_server."\n";

sub getMail(){
    print "haha\n";
    print "Build Server: ".$build_server."\n";
}

getMail();
