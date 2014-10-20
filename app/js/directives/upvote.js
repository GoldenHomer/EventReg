'use strict';

eventsApp.directive('upvote', function () {
	return {
		restrict: 'E',
		templateUrl: '/templates/directives/upvote.html',
		scope: {
			upvote: "&",
			downvote: "&", //Use an ampersand because pass in upvote and downvote as methods to the upvote directive in upvote.html
			count: "=" // Pass in count as an integer
		}
	}
});