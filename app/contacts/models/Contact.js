'use strict';

angular.module( 'app.contact.models', [
	'firebase'
] )
.factory( 'Contact', function ( $rootScope, $http, $firebase ) {
	var ref      = new Firebase( 'https://popping-inferno-2059.firebaseio.com/' );
	var contacts = $firebase( ref ).$asArray();

	var getContacts = function () {
		return contacts;
	};

	var getContact = function ( contact ) {
		return _.find( contacts, function ( c ) {
			return c.id === contact.id;
		} );
	}

	var addContact = function ( contact ) {
		contacts.$add( contact );
	};

	var updateContact = function ( contact ) {
		var item = contacts.$getRecord( contact.$id );
		item = contact;
		contacts.$save( item );
	};

	var deleteContact = function ( contact ) {
		contacts.$remove( contact );
	};

	return {
		'getContacts'   : getContacts,
		'getContact' : getContact,
		'addContact'    : addContact,
		'updateContact' : updateContact,
		'deleteContact' : deleteContact
	};
} );