'use strict';

describe("Controllers", function () {
	describe('MainCtrl', function () {
		var $rootScope, 
			scope, 
			$controller, 
			mockTodoSvc;

	  	beforeEach(module('todoApp'));
	 
	  	beforeEach(inject(function(_$rootScope_, _$controller_){
	    	$rootScope = _$rootScope_;
	    	scope = $rootScope.$new();
	    	$controller = _$controller_;
	    	mockTodoSvc = sinon.stub({
	    		getTodos: function () {}, 
	    		removeTodo: function (index) {},
	    		completeTodo: function (index) {},
	    		addTodo: function(todo) {}
	  		});
	    	$controller('MainCtrl', {'$scope': scope, todoSvc: mockTodoSvc});
	    	spyOn(scope, "resetForm").and.callThrough();
	  	}));

		it('should have a loadTodos function', function () {
			expect(scope.loadTodos).toBeDefined();
		});

		/*it('should have a addTodo function', function () {
			expect(scope.addTodo).toBeDefined();
		});*/

		it("should reset the form after adding a todo", function () {
			scope.addTodo();
			mockTodoSvc.addTodo({});
			expect(scope.resetForm).toHaveBeenCalled();
		});
	});
});
