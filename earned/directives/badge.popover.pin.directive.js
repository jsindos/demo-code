(function () {
	'use strict';

	angular
		.module('accolade.earned.directives')
		.directive('earnedBadgePopoverPin', earnedBadgePopoverPin);

	earnedBadgePopoverPin.$inject = ['AccoladeConstants'];

	function earnedBadgePopoverPin(AccoladeConstants) {
		var directive = {
			restrict: 'E',
			scope: {
				info: '='
			},
			templateUrl: AccoladeConstants.staticPrefix + '/earned/templates/badge.popover.pin.html'
		}
		return directive;
	}
})();