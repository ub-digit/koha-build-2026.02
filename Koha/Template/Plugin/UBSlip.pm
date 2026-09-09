package Koha::Template::Plugin::UBSlip;
use Modern::Perl;
use Template::Plugin;
use base qw( Template::Plugin );
use C4::Koha;
use C4::Context;


sub Print {
    my ($self, $patron) = @_;
    if(!defined($patron) || $patron eq "") {
        return "";
    }
    my $print_text = $patron->get_extended_attribute("PRINT") || "";
    my $print_tillst = $patron->get_extended_attribute("PRINTTILLST") || "";

    # If both texts are empty, return an empty string
    if($print_text eq "" && $print_tillst eq "") {
        return "";

    # If one is empty, return the other
    } elsif($print_text eq "") {
        return $print_tillst;
    } elsif($print_tillst eq "") {
        return $print_text;

    # If both are not empty, return them concatenated with a space
    return $print_text . " " . $print_tillst;
}

1;
