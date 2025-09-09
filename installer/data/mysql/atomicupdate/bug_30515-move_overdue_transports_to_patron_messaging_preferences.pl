use Modern::Perl;

return {
    bug_number  => "30515",
    description => "Add system preferences for patron specific overdue notice preferences",
    up          => sub {
        my ($args) = @_;
        my ( $dbh, $out ) = @$args{qw(dbh out)};

        $dbh->do(
            q{
                INSERT IGNORE INTO `message_attributes`
                    (`message_attribute_id`, `message_name`, `takes_days`)
                VALUES
                    (15, 'Overdue1', 0),
                    (16, 'Overdue2', 0),
                    (17, 'Overdue3', 0)
            }
        );
        say $out "Message attributes for overdue notices added";

        $dbh->do(
            q{
                INSERT IGNORE INTO `message_transports`
                    (`message_attribute_id`, `message_transport_type`, `is_digest`, `letter_module`, `letter_code`)
                VALUES
                    (15, 'email', 0, 'circulation', 'ODUE'),
                    (15, 'sms', 0, 'circulation', 'ODUE'),
                    (16, 'email', 0, 'circulation', 'ODUE2'),
                    (16, 'sms', 0, 'circulation', 'ODUE2'),
                    (17, 'email', 0, 'circulation', 'ODUE3'),
                    (17, 'sms', 0, 'circulation', 'ODUE3')
            }
        );
        say $out "Message transports for overdue notices added";

        $dbh->do(
            q{
                INSERT IGNORE INTO systempreferences
                    (`variable`, `value`, `options`, `explanation`, `type`)
                VALUES (
                    'UsePatronPreferencesForOverdueNotices',
                    '0',
                    NULL,
                    'Use patron specific messaging preferences for overdue notices if available',
                    'YesNo'
                )
            }
        );
        say $out "UsePatronPreferencesForOverdueNotices system preference added";

    },
    }
