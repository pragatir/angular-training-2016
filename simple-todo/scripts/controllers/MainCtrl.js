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

    $scope.todos = todoSvc.todos;

    //Function to add a TODO
    $scope.addTodo = function () {
      var todo = {
        "title" : $scope.title,
        "description" : $scope.description,
        "priority" : $scope.priority
      }
      todoSvc.addTodo(todo);
      $scope.loadTodos();
    };

    $scope.loadTodos = function () {
      $scope.title = '';
      $scope.description = '';
      $scope.priority = '';
      todoSvc.getTodos();
      //$location.hash("todo-list");
      //$anchorScroll();
    }

    //Function to remove a TODO
    $scope.removeTodo = function (index) {
      todoSvc.removeTodo(index);
    };

    //Function to complete a TODO
    $scope.completeTodo = function (index) {
      todoSvc.completeTodo(index);
    }

    $scope.loadTodos();
  }]);
