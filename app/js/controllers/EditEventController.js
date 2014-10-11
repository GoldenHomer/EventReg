'use strict';

eventsApp.controller('EditEventController',
    function EditEventController($scope, eventData) {

        $scope.event = {};

        $scope.saveEvent = function (event, form) {
            if(form.$valid) {
                eventData.save(event)
                    .$promise.then(
                        function(reponse){console.log('success', reponse)},
                        function(reponse){console.log('failure', reponse)}
                    );
            }
        };

        $scope.cancelEdit = function () {
            window.location = "/EventDetails.html";
        };

    }
);