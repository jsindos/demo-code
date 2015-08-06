(function () {
	'use strict';

	angular
		.module('accolade.earned.directives')
		.directive('earnedPin', earnedPin);

	earnedPin.$inject = ['AccoladeConstants'];

	function earnedPin(AccoladeConstants) {
		var directive = {
			controller: 'EarnedPinsController',
			controllerAs: 'vm',
			restrict: 'E',
			scope: {
				info: '='
			},
			templateUrl: AccoladeConstants.staticPrefix + '/earned/templates/earned.pin.html'
		}
		return directive;
	}
})();