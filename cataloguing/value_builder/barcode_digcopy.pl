#!/usr/bin/perl

# Converted to new plugin style (Bug 13437)

# Copyright 2000-2002 Katipo Communications
# Parts copyright 2008-2010 Foundations Bible College
#
# This file is part of Koha.
#
# Koha is free software; you can redistribute it and/or modify it
# under the terms of the GNU General Public License as published by
# the Free Software Foundation; either version 3 of the License, or
# (at your option) any later version.
#
# Koha is distributed in the hope that it will be useful, but
# WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
# GNU General Public License for more details.
#
# You should have received a copy of the GNU General Public License
# along with Koha; if not, see <https://www.gnu.org/licenses>.

use Modern::Perl;

use C4::Context;
use C4::Barcodes::ValueBuilder;
use C4::Biblio      qw( GetMarcFromKohaField );
use Koha::DateUtils qw( dt_from_string );

use Algorithm::CheckDigits qw( CheckDigits );

use CGI      qw ( -utf8 );
use C4::Auth qw( check_cookie_auth );
my $input = CGI->new;
my ($auth_status) =
    check_cookie_auth( $input->cookie('CGISESSID'), { catalogue => 1 } );
if ( $auth_status ne "ok" ) {
    print $input->header( -type => 'text/plain', -status => '403 Forbidden' );
    exit 0;
}

my $builder = sub {
    my ($params) = @_;
    my $function_name = $params->{id};
    my %args;

    # use Data::Dumper;
    # print STDERR Dumper(["DEBUG", $params->{record}, $params->{id}]);

    my $nextnum = '';
    my $scr;

    # Barcode format: D20260317136284001
    # D <year-4dig> <month-2dig> <day-2dig> <job-id-6dig> <counter-3digits>
    # Find the current record, check that record's list of items.
    # Get the highest counter from any item in the record.
    # Add 1 to the counter, and create a new barcode with all other values the same as the current record.

    my $record = $params->{record};
    # Record is a MARC::Record object, so we can get the biblionumber from the 001 field
    my $biblionumber = $record->field('001')->data;
    # Get all barcodes for the items in the record
    my @barcodes = Koha::Items->search( { biblionumber => $biblionumber }, { select => 'barcode' } )->as_list;
    my $barcode_with_highest_counter;
    my $max_counter = 0;
    foreach my $item (@barcodes) {
        if ($item->barcode =~ /^D\d{8}\d{6}(\d{3})$/) {
            my $counter = $1;
            if ($counter > $max_counter) {
                $max_counter = $counter;
                $barcode_with_highest_counter = $item->barcode;
            }
        }
    }
    
    # Build new barcode with only the last 3 digits replaced with a 0-padded new counter
    if ($barcode_with_highest_counter) {
        my $new_counter = sprintf("%03d", $max_counter + 1);
        $nextnum = substr($barcode_with_highest_counter, 0, -3) . $new_counter;
    } else {
        # If no existing barcode matches the format, ignore it and return undef
        $nextnum = '';
    }

    # default js body (if not filled by hbyymmincr)
    $scr or $scr = <<END_OF_JS;
if (\$('#' + id).val() == '' || force) {
    \$('#' + id).val('$nextnum');
};
END_OF_JS

    my $js = <<END_OF_JS;
<script>
function set_barcode(id, force, offset=0) {
$scr
}

function Focus$function_name(event) {
    set_barcode(event.data.id, false);
    return false;
}

function Click$function_name(event) {
    set_barcode(event.data.id, false);
    return false;
}
</script>
END_OF_JS
    return $js;
};

return { builder => $builder };
