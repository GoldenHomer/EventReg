'use strict';

eventApp.controller('EventListController',
 	function EventListController ($scope, $location, eventData) {
		$scope.events = eventData.getAllEvents();
	}
);