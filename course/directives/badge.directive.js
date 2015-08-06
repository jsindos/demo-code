(function () {
	'use strict';

	angular
		.module('accolade.course.directives')
		.directive('badgeInfo', badgeInfo);

	badgeInfo.$inject = ['AccoladeConstants'];

	function badgeInfo(AccoladeConstants) {
		var directive = {
			controller: 'BadgeController',
			controllerAs: 'vm',
			restrict: 'E',
			scope: {
				info: '='
			},
			templateUrl: AccoladeConstants.staticPrefix + '/course/templates/badge.html'
		}
		return directive;
	}
})();