(function () {
	var app = angular.module("waysToServiceApp", []);

	app.value('valueSvc', 123);

	//factory is a function which is responsible for creating the value
	app.factory('factoryService', function(valueSvc) {
	  return valueSvc*2;
	});

	function Greeter(a) {
	  this.greet = function() {
	    return 'Hello ' + a;
	  }
	}
	app.factory('greeterFactoryService', function(valueSvc) {
	  return new Greeter(valueSvc);
	});

	app.service('greeterService', Greeter);
	
	app.controller("WaysToService2Ctrl", function ($scope, factoryService) {
		$scope.value = factoryService;
	})
} ());