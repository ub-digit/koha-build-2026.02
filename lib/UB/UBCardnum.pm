# "bitpattern" is a perl array of numbers.
# The value is the source-bit, the index is the target-bit (in MSD to LSB order).
# Numbers are 28-bit numbers, and 0-27 are valid source-bits.
# For example, bitpattern[0] = 3 means "the source-bit 3 goes to target-bit 27" (the MSB).

# Place in <koha-root>/lib/UB/UBCardnum.pm
package UB::UBCardnum;

use Modern::Perl;
use C4::Context;

sub build_cardnum {
    # "bitpattern" is an arrayref of numbers.
    # The source_number is a 28-bit number.
    # Returns a string of 10 digits, with 4000000000 added to the calculated number
    # to keep it in the 4xxxxxxxxxx range.
    my ($bitpattern, $source_number) = @_;

    my $target_number = 0;
    for my $target_bit (0..27) {
        my $source_bit = $bitpattern->[$target_bit];
        my $bit_value = ($source_number >> $source_bit) & 1;
        $target_number |= ($bit_value << (27 - $target_bit));
    }
    my $final_number = $target_number + 4000000000;
    return sprintf("%010d", $final_number);
}

sub check_if_sequence_exists {
    # Check if the sequence 'ub_cardnum_source_sequence' exists in the database
    # select * from information_schema.tables where table_type = 'SEQUENCE';
    my $dbh = C4::Context->dbh;
    my $sth = $dbh->prepare("SELECT COUNT(*) FROM information_schema.tables WHERE table_type = 'SEQUENCE' AND table_name = 'ub_cardnum_source_sequence'");
    $sth->execute();
    my ($count) = $sth->fetchrow_array();
    return $count > 0;
}

sub create_sequence_if_not_exists {
    # Create the sequence 'ub_cardnum_source_sequence' if it does not exist
    unless (check_if_sequence_exists()) {
        my $dbh = C4::Context->dbh;
        # ALTER SEQUENCE ub_cardnum_source_sequence RESTART WITH 1000000;
        $dbh->do("CREATE SEQUENCE ub_cardnum_source_sequence START 1000000 INCREMENT 1 NO MINVALUE NO MAXVALUE CACHE 1");
    }
}

sub fetch_next_source_number {
    # Fetch from database sequence
    my $dbh = C4::Context->dbh;
    my $sth = $dbh->prepare("select next value for ub_cardnum_source_sequence");
    $sth->execute();
    my ($next_source_number) = $sth->fetchrow_array();
    return $next_source_number;
}

sub default_bitpattern {
    # return "0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27";
    return "27,26,25,24,23,22,21,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0";
}

sub fetch_bitpattern {
    # Fetch from koha-conf.xml <cardnum_bitpattern>
    my $bitpattern = C4::Context->config('cardnum_bitpattern');
    # For debugging purposes, have a fallback default
    if (!defined $bitpattern || $bitpattern eq '') {
        $bitpattern = default_bitpattern();
    }
    # Split on commas and convert to arrayref of numbers
    my @bitpattern_array = split /,/, $bitpattern;
    # Make sure everything is a number
    my @bitpattern_numbers = map { int($_) } @bitpattern_array;
    my $bitpattern_ref = \@bitpattern_numbers;
    return $bitpattern_ref;
}

sub create_cardnum {
    # Ensure the sequence exists
    create_sequence_if_not_exists();
    my $bitpattern = fetch_bitpattern();
    my $source_number = fetch_next_source_number();
    my $cardnum = build_cardnum($bitpattern, $source_number);
    return $cardnum;
}

1; # End of UB::UBCardnum