'use strict';

var contact = angular.module( 'app.contact', [
	'ngRoute',
	'ui.bootstrap',
	'app.contact.controllers',
	'app.contact.models'
] );

var route = function ( $routeProvider ) {
	$routeProvider
		.when( '/contacts', {
			'templateUrl' : 'app/contacts/views/contacts-list.html',
			'controller'  : 'ContactListController'
		} )
		.when( '/contacts/:id', {
			'templateUrl' : 'app/contacts/views/contacts-view.html',
			'controller'  : 'ContactDetailsController'
		} )
		.otherwise( {
			'redirectTo' : '/contacts'
		} );
};

contact.config( [ '$routeProvider' ,  route ] );