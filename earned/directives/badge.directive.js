(function () {
	'use strict';

	angular
		.module('accolade.earned.directives')
		.directive('earnedBadge', earnedBadge);

	earnedBadge.$inject = ['AccoladeConstants'];

	function earnedBadge(AccoladeConstants) {
		var directive = {
			controller: 'EarnedBadgesController',
			controllerAs: 'vm',
			restrict: 'E',
			scope: {
				info: '='
			},
			templateUrl: AccoladeConstants.staticPrefix + '/earned/templates/earned.badge.html'
		}
		return directive;
	}
})();