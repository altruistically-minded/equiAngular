'use strict';

/* Controllers */
function PhoneListCtrl($scope, $http){
	$http.get('phones/phones.json').success(function(data){
		$scope.phones = data;
	});


	// $scope.phones = [
	// 	{
	// 		"name":"Nexus S", 
	// 		"snippet":"Fast just got faster with Nexus S.",
	// 		"age": 0
	// 	},
	// 	{
	// 		"name":"MOTOROLA XOOM with Wi-Fi", 
	// 		"snippet":"The Next, Next Generation tablet.",
	// 		"age": 1
	// 	},
	// 	{	"name":"MOTOROLA XOOM", 
	// 		"snippet":"The Next, Next Generation tablet.",
	// 		"age": 2
	// 	}
	// ];

	//PhoneListCtrl.$inject = ['$scope', '$http'];

	$scope.hello = "Hello, World!";
	$scope.orderProp = 'age';
}