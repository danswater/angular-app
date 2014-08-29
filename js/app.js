'use strict';

angular.module( 'ContactManager', [

] )
.controller( 'MainController', function ( $scope ) {

	$scope.contacts = [
		{ 'id' : 0, 'firstName' : 'Francis','lastName'  : 'Lamayo' },
		{ 'id' : 1, 'firstName' : 'Neil Paul', 'lastName'  : 'Molina' },
		{ 'id' : 2, 'firstName' : 'John', 'lastName'  : 'Lennon' },
		{ 'id' : 3, 'firstName' : 'Paul', 'lastName'  : 'McCartney' },
		{ 'id' : 4, 'firstName' : 'Alice', 'lastName'  : 'Arten' },
		{ 'id' : 5, 'firstName' : 'Bob', 'lastName'  : 'Brigham' }
	];

	/*
		CRUD
	 */
	function resetCreateForm () {
		$scope.newContact = {
			'id' : null,
			'firstName' : '',
			'lastName' : ''
		};
	}

	function createContact ( contact ) {
		contact.id = $scope.contacts.length;
		$scope.contacts.push( contact );

		resetCreateForm();
		cancelCreating();
	}

	$scope.createContact = createContact;

	$scope.editedContact = null;

	function setEditedContact ( contact ) {
		$scope.editedContact = angular.copy( contact );
	}

	$scope.setEditedContact = setEditedContact;

	function updateContact ( contact ) {
		var index = _.findIndex( $scope.contacts, function ( c ) {
			return c.id === contact.id;
		} );

		$scope.contacts[ index ] = contact;

		$scope.editedContact = null;
		$scope.isEditing = false;
	}

	$scope.updateContact = updateContact;

	function deleteContact ( contact ) {
		_.remove( $scope.contacts, function ( c ) {
			return c.id === contact.id;
		} );
	}

	$scope.deleteContact = deleteContact;

	/*
		CREATING AND EDITING STATES
	 */
	$scope.isCreating = false;
	$scope.isEditing  = false;

	function startCreating () {
		$scope.isCreating = true;
		$scope.isEditing  = false;

		resetCreateForm();
	}

	function cancelCreating () {
		$scope.isCreating = false;
	}

	function startEditing () {
		$scope.isCreating = false;
		$scope.isEditing  = true;

		resetCreateForm();
	}

	function cancelEditing () {
		$scope.isEditing = false;
	}

	function shouldShowCreating () {
		return $scope.isCreating && !$scope.isEditing;
	}

	function shouldShowEditing () {
		return !$scope.isCreating && $scope.isEditing;
	}

	$scope.startCreating      = startCreating;
	$scope.cancelCreating     = cancelCreating;
	$scope.startEditing       = startEditing;
	$scope.cancelEditing      = cancelEditing;
	$scope.shouldShowCreating = shouldShowCreating;
	$scope.shouldShowEditing  = shouldShowEditing;
} );