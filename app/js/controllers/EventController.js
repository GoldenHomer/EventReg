'use strict';

eventsApp.controller('EventController',
    function EventController($scope, , $anchorScroll) {
    	$scope.sortorder = 'name';
        eventData.getEvent()
            .promise.then(
                function(event) { // on success
                    $scope.event = event;
                    console.log(event);
                },

                function(response){ //on failure
                    console.log(response);
                }
            );

        $scope.upVoteSession = function(session) {
            session.upVoteCount++;
        };


        $scope.downVoteSession = function(session) {
            session.upVoteCount--;
        };

        $scope.scrollToSession = function(){
            $anchorScroll();
        }
    }
);
