'use strict';

/**
 * @ngdoc function
 * @name todoAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the todoAppApp
 */
angular.module('todoAppApp')
  .controller('MainCtrl', function ($scope) {

    //Array to store the TODOs
    $scope.todos = [{
      "title" : "Get Susan a birthday gift",
      "description" : "Has a birthday on 20th of this month. She likes flowers.",
      "completed" : false,
      "priority" : "High"
    }, {
      "title" : "Call hotel to check on rooms",
      "description" : "Need 2 double occupancy rooms",
      "completed" : true,
      "priority" : "Medium"
    }, {
      "title" : "Send invoice to Carl for Phase 2",
      "description" : "Carl email : carl@company.com",
      "completed" : false,
      "priority" : "Low"
    }];

    // Function to add a TODO
    $scope.addTodo = function () {
      var todo = {
        "title" : $scope.title,
        "description" : $scope.description,
        "completed" : false,
        "priority" : $scope.priority
      }
      $scope.todos.push(todo);
      $scope.title = '';
      $scope.description = '';
      $scope.priority = ''; 
    };

    //Function to remove a todo
    $scope.removeTodo = function (index) {
      $scope.todos.splice(index, 1);
    };

    //Function to mark a TODO completed
    $scope.markCompleted = function (index) {
      var todo = $scope.todos[index];
      todo.completed = !todo.completed;
    };
});
