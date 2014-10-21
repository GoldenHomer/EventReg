'use strict';

describe('EventListController', function () {
	var scope,
		$controllerConstructor,
		mockEventData;

	beforeEach(module("eventsApp"));

	beforeEach(inject(function($controller, $rootscope){
		scope = $rootscope.$new();
		mockEventData = sinon.stub({getAllEvents: function(){}}); // sinon is used to create mock objects
		$controllerConstructor = $controller;
	}));

	it('should set the scope events to the result of eventData.getAllEvents', function(){
		var mockEvents = {};
		mockEventData.getAllEvents.returns(mockEvents);

		var ctrl = $controllerConstructor("EventListController",
			{$scope: scope, $location: {}, eventData: {}});

		expect(scope.events).toBe(mockEvents);
	})

	it('should navigate to the correct url when navigateToDetails is called', function(){
		var mocklocation = sinon.stub({url: function() {}});
		var ctrl = $controllerConstructor("EventListController",
			{$scope: scope, $location: mocklocation, eventData: mockEventData});
		var event = {id: 23};

		scope.navigateToDetails(event);

		expect(mocklocation.url.calledWith('/event/23')).toBe(true);
	})
});