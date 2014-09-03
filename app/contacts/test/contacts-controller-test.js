'use strict';
describe( 'ContactListController', function () {
	var scope, controller, $httpBackend;

	beforeEach( module( 'app' ) );

	beforeEach( inject( function ( _$httpBackend_, $rootScope, $controller ) {
		$httpBackend = _$httpBackend_;
		$httpBackend.expectGET( 'app/contacts/contacts.json' )
		.respond( [
			{ 'firstName' : 'Bob', 'lastName' : 'Marley' }
		] );

		scope = $rootScope.$new();
		controller = $controller( 'ContactController', { $scope : scope } );
	} ) );

	it( 'should create "contacts" model with 1 contacts', inject( function ( $controller) {
		expect( scope.contacts ).toBeUndefined;
		$httpBackend.flush();

		expect( scope.contacts ).toEqual( [ {
			'firstName' : 'Bob', 'lastName' : 'Marley'
		} ] );
	} ) );

	it ( 'should have length of 1', function () {
		$httpBackend.flush();
		expect( scope.contacts.length ).toEqual( 1 );
	} );
} );