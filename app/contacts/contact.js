'use strict';

angular.module( 'app.contact', [
	'ngRoute',
	'ui.bootstrap',
	'app.contact.controllers',
	'app.contact.models'
] )
.config( [ '$routeProvider' , function ( $routeProvider ) {
	$routeProvider
		.when( '/contacts', {
			'templateUrl' : 'app/contacts/views/contacts-list.html',
			'controller'  : 'ContactController'
		} )
		.when( '/contacts/:id', {
			'templateUrl' : 'app/contacts/views/contacts-view.html',
			'controller'  : 'ContactDetailsController'
		} )
		.otherwise( {
			'redirectTo' : '/contacts'
		} );
} ] );