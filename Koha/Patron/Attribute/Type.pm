package Koha::Patron::Attribute::Type;

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

use Koha::Database;
use Koha::Exceptions::Patron::Attribute::Type;

use base qw(Koha::Object Koha::Object::Limit::Library);

=head1 NAME

Koha::Patron::Attribute::Type - Koha::Patron::Attribute::Type Object class

=head1 API

=head2 Class Methods

=cut

=head3 store

    my $attribute = Koha::Patron::Attribute->new({ code => 'a_code', ... });
    try { $attribute->store }
    catch { handle_exception };

=cut

sub store {

    my $self = shift;

    $self->check_repeatables;
    $self->check_unique_ids;
    $self->check_hidden;
    $self->check_readonly;
    $self->check_secret;

    return $self->SUPER::store();
}

=head3 attributes

=cut

sub attributes {
    my ($self) = @_;
    my $attributes_rs = $self->_result->borrower_attributes;
    Koha::Patron::Attributes->_new_from_dbic($attributes_rs);
}

=head2 Internal Methods

=cut

=head3 check_repeatables

=cut

sub check_repeatables {
    my ($self) = @_;

    return $self if $self->repeatable;

    my $count = $self->attributes->search(
        {},
        {
            select   => [ { count => 'id', '-as' => 'c' } ],
            group_by => 'borrowernumber',
            having   => { c => { '>' => 1 } }
        }
    )->count;

    Koha::Exceptions::Patron::Attribute::Type::CannotChangeProperty->throw( property => 'repeatable' )
        if $count;

    return $self;
}

=head3 check_unique_ids

=cut

sub check_unique_ids {
    my ($self) = @_;

    return $self unless $self->unique_id;

    my $count = $self->attributes->search(
        {},
        {
            select   => [ { count => 'id', '-as' => 'c' } ],
            group_by => 'attribute',
            having   => { c => { '>' => 1 } }
        }
    )->count;

    Koha::Exceptions::Patron::Attribute::Type::CannotChangeProperty->throw( property => 'unique_id' )
        if $count;

    return $self;
}

=head3 check_hidden

=cut

sub check_hidden {
    my ($self) = @_;
    if (
        $self->hidden
        && (   $self->readonly
            || $self->secret
            || $self->opac_display
            || $self->opac_editable
            || $self->display_checkout )
        )
    {
        Koha::Exceptions::Patron::Attribute::Type::InvalidPropertyCombination->throw( property => 'hidden' );
    }
}

=head3 check_readonly

=cut

sub check_readonly {
    my ($self) = @_;
    if (
        $self->readonly
        && (   $self->hidden
            || $self->secret
            || $self->opac_editable )
        )
    {
        Koha::Exceptions::Patron::Attribute::Type::InvalidPropertyCombination->throw( property => 'readonly' );
    }
}

=head3 check_secret

=cut

sub check_secret {
    my ($self) = @_;
    if (
        $self->secret
        && (   $self->readonly
            || $self->hidden
            || $self->opac_display
            || $self->opac_editable
            || $self->display_checkout )
        )
    {
        Koha::Exceptions::Patron::Attribute::Type::InvalidPropertyCombination->throw( property => 'hidden' );
    }
}

=head3 is_editable

=cut

sub is_editable {
    my ($self) = @_;
    my $logged_in_borrowernumber = C4::Context->userenv->{'number'};
    if ($logged_in_borrowernumber) {
        my $patron = Koha::Patrons->find($logged_in_borrowernumber);
        return $patron->is_superlibrarian && !( $self->hidden || $self->readonly || $self->secret ) if $patron;
    }
}

=head3 _type

=cut

sub _type {
    return 'BorrowerAttributeType';
}

=head3 _library_limits

=cut

sub _library_limits {
    return {
        class   => 'BorrowerAttributeTypesBranch',
        id      => 'bat_code',
        library => 'b_branchcode'
    };
}

1;
