angular.module( 'contactApp', [ 
	'ngRoute',
	'contactControllers'
] )
.config( [ '$routeProvider', function ( $routeProvider ) {
	$routeProvider
		.when( '/contacts', {
			'templateUrl' : 'partials/contact-list.html',
			'controller'  : 'ContactListController'
		} )
		.otherwise( {
			'redirectTo' : '/contacts'
		} );
} ] );