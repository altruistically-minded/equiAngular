'use strict';

/* Controllers */
function PhoneListCtrl($scope, $http){
	$http.get('phones/phones.json').success(function(data){
		$scope.phones = data;
	});
	//PhoneListCtrl.$inject = ['$scope', '$http'];
	$scope.hello = "Hello, World!";
	$scope.orderProp = 'age';
}

function PhoneDetailCtrl($scope, $routeParams, $http) {
	$http.get('phones/' + $routeParams.phoneId + '.json').success(function(data) {
		$scope.phone = data;
	});
}
//PhoneDetailCtrl.$inject = ['$scope', '$routeParams', '$http'];