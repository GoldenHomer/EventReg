'use strict';

var eventsApp = angular.module('eventsApp', ['ngResource', 'ngRoute'])

	.config(function($routeProvider, $locationProvider){
		$routeProvider
			.when('/newEvent', {
				templateUrl: 'templates/NewEvent.html',
				controller: 'EditEventController'
			})
			.when('/events', {
				templateUrl: 'templates/EventList.html',
				controller: 'EventListController'
			})
			.when('/event/:eventId',{
				templateUrl: 'templates/EventList.html',
				controller: 'EventController',
				resolve: { // Delay loading a view until data is finished loading.
					event: function($route, eventData){
						return eventData.getEvent($route.current.pathParams.eventId).$promise;
					}
				}
			})
			.otherwise({
				redirectTo: '/events'
			});
		$locationProvider.html5Mode(true); // This is key to supporting HTML5 routing.
	});