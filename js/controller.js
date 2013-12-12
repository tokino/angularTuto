/* global angular: true, window: true */

//var phonecatControllers = angular.module('phonecatCotrollers', []);	//モジュール名の指定
//
////コントローラーの作成
//phonecatControllers.controller('PhoneListCtrl', ['$scope', '$http', function ($scope, $http) {
//	$http.get('./json/phones.json')
//	.success(function (data) {
//		$scope.phones = data;
//	});
//	$scope.orderProp = 'age';
//}]);
//
//phonecatControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams', function($scope, $routeParams) {
//	$scope.phoneId = $routeParams.phoneId;
//}]);
var phonecatControllers = angular.module('phonecatControllers', []);
 
phonecatControllers.controller('PhoneListCtrl', ['$scope', '$http',
  function ($scope, $http) {
    $http.get('json/phones.json').success(function(data) {
      $scope.phones = data;
    });
 
    $scope.orderProp = 'age';
  }]);
 
phonecatControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams',
  function($scope, $routeParams) {
    $scope.phoneId = $routeParams.phoneId;
  }]);