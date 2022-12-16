#!/usr/bin/env perl
package Foo;
use strict;
use warnings;
use base "Exporter";

sub verifyAction {
    my $setup = shift @_;
    if ( $setup eq 'clean' ) {
        print "Cleaning Package Folder: " . $::version . "\n";
    }
    elsif ( $setup eq 'build' ) {
        print "Building Package Folder: " . $::version . "\n";
    }
    else {
        print "Error action!\n";
    }
}

sub foo {
    my $result = 1;
    if ($result) {
        print "halo1 \n";
    }
}

sub doSync {
    my $synclogfile = "log/dosync.log";
    print '-' x 80 . "\n";
    print "Doing Sync ...\n";
    print '-' x 80 . "\n";

    # open( STDOUT, "| tee $synclogfile" )
    open my $fh, ">", $synclogfile
      or die("Could not open sync log file: $!");
    my $oldfh = select("$fh");
    print ${oldfh};
    print "halo3";
    system("pwd");
    select($oldfh);
}

# ------------------------------------
# export
# ------------------------------------
our @EXPORT_OK = qw(
  verifyAction
  foo
  doSync
);
our %EXPORT_TAGS = ( all => \@EXPORT_OK );
1;

