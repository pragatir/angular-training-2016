'use strict';

/**
 * @ngdoc function
 * @name todoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Main Controller of the todoApp
 */
angular.module('todoApp')
  .controller('MainCtrl', function ($scope) {

    //Array of TODOs
    $scope.todos = [{
      "title" : "Get Susan a birthday gift",
      "description" : "Has a birthday on 20th of this month. She likes flowers.",
      "priority" : "High"
    }, {
      "title" : "Call hotel to check on rooms",
      "description" : "Need 2 double occupancy rooms",
      "priority" : "Medium"
    }, {
      "title" : "Send invoice to Carl for Phase 2",
      "description" : "Carl email : carl@company.com",
      "priority" : "Low"
    }];

    //Function to add a TODO
    $scope.addTodo = function () {
      var todo = {
        "title" : $scope.title,
        "description" : $scope.description,
        "priority" : $scope.priority
      }
      $scope.todos.push(todo);
      $scope.title = '';
      $scope.description = '';
      $scope.priority = '';
    };

    //Function to remove a TODO
    $scope.removeTodo = function (index) {
      $scope.todos.splice(index, 1);
    };
  });
