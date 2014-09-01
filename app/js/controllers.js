'use strict';

angular.module( 'contactControllers', [
	'ui.bootstrap'
] )
.controller( 'ContactListController', function ( $scope, $http, $modal ) {
	$http.get( 'contacts/contacts.json' ).success( function ( contacts ) {
		$scope.contacts = contacts;
	} );

	$scope.items = [ 'item1', 'item2', 'item3' ];
	$scope.open = function ( size ) {
		var modalInstance = $modal.open( {
			'templateUrl' : 'partials/modal.html',
			'size'        : size,
			'resolve'     : {
				'items' : function () {
					return $scope.items;
				}
			}
		} );

		modalInstance.result.then( function ( selectedItem ) {
			$scope.selected = selectedItem;
		}, function () {
			console.log( 'Modal dismissed at: ' + new Date() );
		} );
	};
} );