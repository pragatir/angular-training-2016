(function () {
	var app = angular.module("compileSample", []);

	app.controller("CompileCtrl", ["$scope", "$compile", "$document", function ($scope, $compile, $document) {

		$scope.appendDivToElement = function (markup) {
			var ele = angular.element(document.querySelector('#appendHere'));
			return $compile(markup)($scope).append(ele);
		}

	}]);
} ());