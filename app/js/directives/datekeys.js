'use strict';

eventsApp.directive('dateKeys', function(){
	return {
		restrict: 'A', // Use as attribute
		link: function(scope, element, attrs, controllers){
			element.on('keydown', function(event){
				if(isNumericKeyCode(event.keyCode) || isFowardSlashKeyCode(event.keyCode) || isNavigationKeycode(event.keyCode)){
					return true;
				}
				return false;
			});
		}
	}
	function isNumericKeyCode(keyCode){
		return (event.keyCode >= 48 && event.keyCode <= 57) || (event.keyCode >= 96 && event.keyCode <= 105);
	}
	function isFowardSlashKeyCode (keyCode) {
		return event.keyCode === 191;
	}
	function isNavigationKeycode (keyCode) {
		switch (keyCode){
			case 8: //backspace
			case 35: //end
			case 36: //home
			case 37: //left
			case 38: //up
			case 39: //right
			case 40: //down
			case 45: //ins
			case 46: //del
				return true;
			default:
				return false;
		}
	}
});