'use strict';

describe('MainCtrl', function () {
	var $rootScope, scope, $controller, mockTodoSvc;

  beforeEach(module('todoApp'));
 
  beforeEach(inject(function(_$rootScope_, _$controller_){
    $rootScope = _$rootScope_;
    scope = $rootScope.$new();
    $controller = _$controller_;
    mockTodoSvc = sinon.stub({getTodos: function () {}, removeTodo: function (index) {},
    								completeTodo: function (index) {}
  								});
    $controller('MainCtrl', {'$scope': scope, todoSvc: mockTodoSvc});
  }));

	it('should have a loadTodos function', function () {
		expect(scope.loadTodos).toBeDefined();
	});

	it('should call removeTodo from todoSvc with same parameter passed to removeTodo on scope', function () {
		var index = 2;
		scope.removeTodo(index);
		expect(mockTodoSvc.removeTodo.calledWith(index)).toBe(true);
	});

	it("should call completeTodo from todoSvc with same parameter passed to completeTodo on scope", function () {
		var index = 2;
		scope.completeTodo(index);
		expect(mockTodoSvc.completeTodo.calledWith(index)).toBe(true);
	});
});