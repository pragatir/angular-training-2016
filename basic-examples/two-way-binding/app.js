(function () {
	var app = angular.module("twoWayBinding", []);

	app.controller("myFirstCtrl", function ($scope) {
		$scope.num = 3;

		$scope.changeValue = function () {
			$scope.num = 6;
		}
		
		$scope.putValueBack = function () {
			$scope.num = 3;
		}
	});
} ());