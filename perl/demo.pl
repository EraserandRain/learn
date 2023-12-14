#!/usr/bin/env perl
use strict;
use warnings;
use lib 'module';
use Foo;
use Cwd 'abs_path';
use Time::Local qw(timelocal_posix timegm_posix);
use File::Tee qw(tee);
use YAML::Syck;
# use Halo;
 sub cmd {
	my $cmd = shift;
	print "Run: $cmd\n";
	system($cmd);
	}

sub info {
	my $msg = shift;
	print "[Info]: $msg\n";
}

# main

my @Array = ('Geeks','for','Geek');
my @A = grep(/^G/,@Array);
print @A;
