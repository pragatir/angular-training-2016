angular.module("todoApp")
	.service("todoSvc", ["$http", "$log", function ($http, $log) {
		this.todos = [{
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
    }];

    this.getTodos = function (todos) {
      return this.todos;
    }

    this.addTodo = function (todo) {
    	this.todos.push(todo);
    }

    //Function to remove a TODO
    this.removeTodo = function (index) {
    	$log.info("Removing TODO");
      this.todos.splice(index, 1);
    };

    //Function to complete a TODO
    this.completeTodo = function (index) {
    	$log.info("Completing TODO");
      this.todos[index].completed = true;
    }
	}]);