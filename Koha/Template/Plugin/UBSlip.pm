package Koha::Template::Plugin::UBSlip;
use Modern::Perl;
use Template::Plugin;
use base qw( Template::Plugin );
use C4::Koha;
use C4::Context;

use Data::Dumper;

sub Print {
    my ($self, $patron) = @_;
    if(!defined($patron) || $patron eq "") {
        return "";
    }
    my $print_text = $patron->get_extended_attribute("PRINT");
    my $print_tillst = $patron->get_extended_attribute("PRINTTILLST");

    if($print_text) {
        $print_text = $print_text->attribute();
    } else {
    	$print_text = "";
    }
    if($print_tillst) {
    	$print_tillst = getName($print_tillst->attribute());
    } else {
    	$print_tillst = "";
    }
#    die Dumper($print_text, $print_tillst);

    # If both texts are empty, return an empty string
    if($print_text eq "" && $print_tillst eq "") {
        return "";

    # If one is empty, return the other
    } elsif($print_text eq "") {
        return $print_tillst;
    } elsif($print_tillst eq "") {
        return $print_text;
    }

    # If both are not empty, return them concatenated with a space
    return $print_tillst . " " . $print_text;
}

sub getName {
    my ($attribute) = @_;
    my $av = Koha::AuthorisedValues->search({ category => "BESTTILLST", authorised_value => $attribute });
    if ($av->count) {
        return $av->next->lib;
    }
    else {
        # TODO: Fallback?
        return '';
    }
}

1;
