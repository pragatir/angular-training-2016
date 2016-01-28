(function () {
	var app = angular.module("waysToServiceApp");

	app.controller("WaysToServiceCtrl", ["$scope", "myService", "myFactory", "myProv",
		function ($scope, myService, myFactory, myProv) {

		$scope.serviceOutput = "myService = " + myService;
		$scope.factoryOutput = "myFactory = " + myFactory;
		$scope.providerOutput = "myProvider = " + myProv;

	}]);
} ());