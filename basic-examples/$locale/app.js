(function () {
	var app = angular.module("localeSample", []);

	app.controller("LocaleCtrl", ["$scope", "$locale", function ($scope, $locale) {
		$scope.myDate = Date.now();
		$scope.dateFormat = $locale.DATETIME_FORMATS.fullDate;

		//Localisation URL
		//https://code.angularjs.org/1.4.9/i18n/
	}]);
} ());