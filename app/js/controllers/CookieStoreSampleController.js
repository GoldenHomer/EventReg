'use strict';

eventsApp.controller('CookieStoreSampleController',
    function CookieStoreSampleController($scope, $cookieStore) { // No way to specify an expiration date in Angular without using a 3rd party library.
        $scope.event = {id: 1, name:"My Event"};

        $scope.saveEventToCookie = function(event) {
            $cookieStore.put('event', event);
        };

        $scope.getEventFromCookie = function() {
            console.log($cookieStore.get('event'));
        };

        $scope.removeEventCookie = function() {
            $cookieStore.remove('event');
        };


    }
);
