#!/usr/bin/env perl
package Foo;
use strict;
use warnings;
use base "Exporter";

sub setup_log{
	my $log = @_;
	open(my $fh,">",$log or die "$!");
	select $fh;
}



# ------------------------------------
# export
# ------------------------------------
our @EXPORT_OK = qw(
	setup_log
);
our %EXPORT_TAGS = ( all => \@EXPORT_OK );
1;
