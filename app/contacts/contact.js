'use strict';

angular.module( 'app.contact', [
	'ngRoute',
	'ui.bootstrap'
] )
.config( [ '$routeProvider' , function ( $routeProvider ) {
	$routeProvider
		.when( '/contacts', {
			'templateUrl' : 'app/contacts/contacts-view.html',
			'controller'  : 'ContactController'
		} )
		.otherwise( {
			'redirectTo' : '/contacts'
		} );
} ] )
.factory( 'Contact', function ( $http ) {
	var contacts;
	var service = {};

	$http.get( 'app/contacts/contacts.json' ).success( function ( data ) {
		contacts = data;
	} );

	service.getContacts = function () {
		return contacts;
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
} )
.controller( 'ContactController', function ( $scope, $modal, Contact ) {
	$scope.contacts = Contact.getContacts();

	$scope.addForm = function ( size ) {
		var modalInstance = $modal.open( {
			'templateUrl' : 'app/contacts/contact-add.html',

			'controller'  : 'ContactAddController',

			'size'        : size
		} );
	};

	$scope.updateForm = function ( size ) {
		var modalInstance = $modal.open( {
			'templateUrl' : 'app/contacts/contact-update.html',

			'controller' : 'ContactEditController',

			'size' : size
		} );
	};

	$scope.delete = function ( contact ) {
		Contact.deleteContact( contact );
	};

} )
.controller( 'ContactAddController', function ( $scope, $modalInstance, Contact ) {
	$scope.save = function ( contact ) {
		contact.id = Contact.getContacts().length;
		Contact.setContact( contact );
		$modalInstance.close();
	};

	$scope.cancel = function () {
		$modalInstance.dismiss( 'cancel' );
	};
} );