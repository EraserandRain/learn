#!/usr/bin/env perl
use strict;
use warnings;
use Time::HiRes qw(gettimeofday tv_interval);

# Define a custom warning handler to handle warnings triggered by 'warn'.
sub custom_warn_handler {
    my ($warning) = @_;
    $warning =~ s/at\s\S+ line \d+\.//;
    print "[Warning]: $warning";
}
$SIG{__WARN__} = \&custom_warn_handler;

warn("This is a custom warning.");


#########################################################################
# Custom Info
# Define a custom subroutine to print informational messages.
#########################################################################

sub info {
    my ($info_message) = @_;
    print "[Info]: $info_message\n";
}

# Example usage:
info("This is an info message.");

print "start time: " . localtime(time) . "\n";
sleep(5);
print "end time: " . localtime(time) . "\n";
