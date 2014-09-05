'use strict';

angular.module( 'app.contact.models', [
] )
.factory( 'Contact', function ( $http ) {
	var contacts;
	var service = {};

	$http.get( 'app/contacts/contacts.json' ).success( function ( data ) {
		contacts = data;
	} );

	service.getContacts = function () {
		return contacts;
	};

	service.getContact = function ( contact ) {
		return _.find( contacts, function ( c ) {
			return c.id === contact.id;
		} );
	};

	service.setContact = function ( contact ) {
		contacts.push( contact );
	};

	service.deleteContact = function ( contact ) {
		_.remove( contacts, function ( c ) {
			return c.id === contact.id;
		} );
	};

	return service;
} );