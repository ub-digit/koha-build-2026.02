use Modern::Perl;
use Koha::Installer::Output qw(say_warning say_success say_info);

return {
    bug_number  => "28657",
    description => "Change branches.branchip to mediumtext to allow for multiple IP ranges",
    up          => sub {
        my ($args) = @_;
        my ( $dbh, $out ) = @$args{qw(dbh out)};

        $dbh->do(
            q{ALTER TABLE `branches` MODIFY `branchip` mediumtext DEFAULT NULL COMMENT 'the IP address(es) for your library or branch'}
        );

        say_success( $out, "Change branches.branchip to mediumtext to allow for multiple IP ranges" );

        my $sth = $dbh->prepare(
            q{
            SELECT branchip,branchcode
            FROM branches
            WHERE branchip like '%*%'
        }
        );
        $sth->execute;
        my $results = $sth->fetchall_arrayref( {} );
        $sth = $dbh->prepare(
            q{
            UPDATE branches
            SET branchip = ?
            WHERE branchcode = ?
        }
        );

        foreach (@$results) {
            $_->{branchip} =~ s|\*||g;
            $sth->execute( $_->{branchip}, $_->{branchcode} );
        }

        say_info( $out, "Remove '*' from branches.branchip" );
    },
};
