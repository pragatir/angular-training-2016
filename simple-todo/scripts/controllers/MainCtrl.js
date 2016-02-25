'use strict';

/**
 * @ngdoc function
 * @name todoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Main Controller of the todoApp
 */
angular.module('todoApp')
  .controller('MainCtrl', ["$scope", "todoSvc", function ($scope, todoSvc) {

    $scope.todos = [{
      "title" : "Get Susan a birthday gift",
      "description" : "Has her birthday on 20th of this month. She likes flowers.",
      "priority" : "High",
      "completed" : false
    }, {
      "title" : "Call hotel to check on rooms",
      "description" : "Need 2 double occupancy rooms",
      "priority" : "Medium",
      "completed" : false
    }, {
      "title" : "Send invoice to Carl for Phase 2",
      "description" : "Carl email : carl@company.com",
      "priority" : "Low",
      "completed" : false
    }];;
    $scope.priorityOptions = [{
      name : "High",
      value : 1
    }, {
      name : "Medium",
      value : 2
    }, {
      name : "Low",
      value : 3
    }];

    //Function to add a TODO
    $scope.addTodo = function () {
      var todo = {
        "title" : $scope.title,
        "description" : $scope.description,
        "priority" : $scope.priority
      }
      todoSvc.addTodo(todo);
      $scope.resetForm();
      $scope.loadTodos();
    };

    $scope.loadTodos = function () {
      todoSvc.getTodos();
    }

    //Function to remove a TODO
    $scope.removeTodo = function (index) {
      todoSvc.removeTodo(index);
    };

    //Function to complete a TODO
    $scope.completeTodo = function (index) {
      todoSvc.completeTodo(index);
    }

    //Function to reset the form
    $scope.resetForm = function () {
      $scope.title = '';
      $scope.description = '';
      $scope.priority = '';
    }

    $scope.loadTodos();
  }]);
