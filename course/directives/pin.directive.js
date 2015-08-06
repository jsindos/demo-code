(function () {
	'use strict';

	angular
		.module('accolade.course.directives')
		.directive('pinInfo', pinInfo)

	pinInfo.$inject = ['AccoladeConstants'];

	function pinInfo(AccoladeConstants) {
		var directive = {
			controller: 'PinController',
			controllerAs: 'vm',
			restrict: 'E',
			scope: {
				info: '='
			},
			templateUrl: AccoladeConstants.staticPrefix + '/course/templates/pin.html'
		}
		return directive;
	}
})();