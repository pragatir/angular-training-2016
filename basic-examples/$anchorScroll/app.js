(function () {
	var app = angular.module("anchorScrollSample", []);

	app.controller("anchorScrollCtrl", ["$scope", "$location", "$anchorScroll", function ($scope, $location, $anchorScroll) {
		//$anchorScroll.yOffset = 10;
		$scope.jumpToContainer3 = function () {
			$location.hash("three");
			$anchorScroll();
		}

		$scope.gotoSpecified() = function (id) {
			$location.hash(id);
			$anchorScroll();
		}
	}]);
} ());