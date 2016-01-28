(function () {
	var app = angular.module("localeSample", []);

	app.controller("LocaleCtrl", ["$scope", "$timeout", function ($scope, $timeout) {
		setTimeout(function () {
			$scope.name = "Jane Doe";
		}, 3000);

		/*var promise = $timeout(function () {
			$scope.name = "Jane Doe";
		}, 3000);*/

		$scope.cancelTimer = function () {
			//$timeout.cancel(promise);
		}
	}]);
} ());