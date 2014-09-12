'use strict';

var Contact = angular.module( 'app.contact.controllers', [] );

var listController = function ( $scope, $modal, Contact ) {
	
	$scope.contacts = Contact.getContacts();

	function addHandler( $scope, $modalInstance, Contact ) {
		$scope.save = function ( contact ) {
			contact.id = new Date().getTime();

			Contact.addContact( contact );
			$modalInstance.close();
		};

		$scope.cancel = function () {
			$modalInstance.dismiss( 'cancel' );
		};
	}

	$scope.addForm = function () {
		var modalInstance = $modal.open( {
			'templateUrl' : 'app/contacts/views/contact-add.html',

			'controller'  : addHandler,
		} );
	};

	function updateHandler( $scope, $modalInstance, Contact, contact ) {
		$scope.contact = contact;

		$scope.save = function ( contact ) {
			Contact.updateContact( contact );
			$modalInstance.close();
		};

		$scope.cancel = function () {
			$modalInstance.dismiss( 'cancel' );
		};
	}

	$scope.updateForm = function ( contact ) {
		$scope.contact = Contact.getContact( contact );
		var modalInstance = $modal.open( {
			'templateUrl' : 'app/contacts/views/contact-update.html',

			'controller' : updateHandler,

			'resolve' : {
				'contact' : function () {
					return $scope.contact;
				}
			}
		} );
	};

	$scope.delete = function ( contact ) {
		Contact.deleteContact( contact );
	};

};

Contact.controller( 'ContactListController', listController );

var detailsController = function ( $scope, $routeParams, Contact ) {
	var params = {
		'id' : parseInt( $routeParams.id, 10 )
	};

	$scope.contact = Contact.getContact( params );

};

Contact.controller( 'ContactDetailsController', detailsController );