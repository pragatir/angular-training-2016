'use strict';
(function () {
	var app = angular.module('scopeApp', []);

	// ===================================================================
	// Parent-Child scope relation in Controller
	var ParentCtrlFunction = function ($scope, $log) {
		$scope.title = "ng Basics!";
		/*$scope.book = {
			title : "ng Basics!"
		}*/
	};

	var ChildCtrlFunction = function ($scope) {
		/*$scope.book = {
			title : "ng Advanced Concepts!"
		}*/
	};

	app.controller("ParentCtrl", ["$scope", "$log", ParentCtrlFunction]);
	app.controller("ChildCtrl", ["$scope", ChildCtrlFunction]);

	// ===================================================================
	// Parent-Child scope relation in Directive
	/*var scopeCtrl = function ($scope) {
		$scope.show = true;
		$scope.title = "ng Basics!";
		$scope.book = {
			title : "ng Basics!"
		}
	}
	app.controller("scopeCtrl", ["$scope", scopeCtrl]);*/


	// ====================================================================
	// Custom $watch function
	/*var watchSampleCtrl = function ($scope, $log) {
		$scope.book = {
			title : "ng Basics!"
		}
		$scope.$watch("book.title", function (newValue, oldValue) {
			$log.info("Custom handle");
		});
	}
	app.controller("watchSampleCtrl", ["$scope", "$log", watchSampleCtrl]);*/

	// ====================================================================
	// Digest cycle explained
	/*var digestSampleOneCtrl = function ($scope) {
		$scope.book = {
			title : "ng Basics!"
		}
		setTimeout(function () {
			$scope.book.title = "ng Advanced I";
			$scope.$apply();
		}, 2000);		
	}
	var digestSampleTwoCtrl = function ($scope) {
		$scope.book = {
			title : "ng Basics!"
		}
		setTimeout(function () {
			$scope.book.title = "ng Advanced II";			
		}, 3000);		
	}
	app.controller("digestSampleOneCtrl", ["$scope", digestSampleOneCtrl]);
	app.controller("digestSampleTwoCtrl", ["$scope", digestSampleTwoCtrl]);*/

} ());