/* global angular: true */

var phonecatApp = angular.module('phonecatApp', []);	//モジュール名の指定

//コントローラーの作成
phonecatApp.controller('PhoneListCtrl', ['$scope', '$http', function ($scope, $http) {
	$http({
		method: 'GET',
		url: './json/phones.json'
	})
	.success(function (data) {
		$scope.phones = data;
	})
	.error(function (data, status, headers, config) {
		console.log(data);
		console.log(status);
		console.log(headers);
		console.log(config);
	});
	//jsonの作成
//	$scope.phones = [
//		{
//			name: 'Nexus S',
//			snippet: 'Fast just got faster with Nexus S.'
//		},
//		{
//			name: 'Motorola XOOM™ with Wi-Fi',
//			snippet: 'The Next, Next Generation tablet.'
//		},
//		{
//			name: 'MOTOROLA XOOM™',
//			snippet: 'The Next, Next Generation tablet.'
//		}
//	];
	
	$scope.orderProp = 'age';
}]);