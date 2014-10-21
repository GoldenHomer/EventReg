'use strict';

eventApp.directive('gravatar', function (gravatarUrlBuilder) {
	return {
		restrict: 'E',
		template: '<img />',
		replace: true, // You can see that the gravatar tag is replaced with img tag when inspecting
		link: function (scope, element, attrs, controller) {
			attrs.$observe('email', function(newValue, oldValue){
				if (newValue !== oldValue){
					attrs.$set('src', gravatarUrlBuilder.buildGravatarUrl(newValue));
				}
			});
		}
	}
});