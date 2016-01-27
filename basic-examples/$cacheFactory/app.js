(function () {
	var app = angular.module("cacheFactorySample", []);

	app.factory("myCache", ["$cacheFactory", function ($cacheFactory) {
		return $cacheFactory("myCache", {capacity : 3});
	}]);

	app.controller("CacheFactoryCtrl", ["$scope", "myCache", function ($scope, myCache) {
		$scope.addToCache = function (key, value) {
			myCache.put(key, value);
		};

		$scope.readFromCache = function (key) {
			return myCache.get(key);
		};

		$scope.getCacheStats = function () {
			return myCache.info();
		};
	}]);
} ());