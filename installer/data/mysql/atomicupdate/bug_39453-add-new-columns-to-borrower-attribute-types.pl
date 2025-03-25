use Modern::Perl;
use Koha::Installer::Output qw(say_warning say_success say_info);

return {
    bug_number  => "39453",
    description => "Add attribute type settings for restricting access to extended attributes",
    up          => sub {
        my ($args) = @_;
        my ( $dbh, $out ) = @$args{qw(dbh out)};

        $dbh->do(
            q{ALTER TABLE `borrower_attribute_types` ADD COLUMN IF NOT EXISTS `hidden` tinyint(1) NOT NULL DEFAULT 0, ADD COLUMN IF NOT EXISTS `readonly` tinyint(1) NOT NULL DEFAULT 0, ADD COLUMN IF NOT EXISTS `secret` tinyint(1) NOT NULL DEFAULT 0}
        );

        say $out
            "Added columns 'borrower_attribute_types.hidden', 'borrower_attribute_types.readonly' and 'borrower_attribute_types.secret'";

    },
};
