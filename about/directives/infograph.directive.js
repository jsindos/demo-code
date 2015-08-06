(function () {
	'use strict';

	angular
		.module('accolade.about.directives')
		.directive('infographImage', infographImage);

	infographImage.$inject = ['AccoladeConstants'];

	function infographImage(AccoladeConstants) {
		var directive = {
			controller: 'AboutController',
			controllerAs: 'vm',
			restrict: 'E',
			scope: {
				info: '@info'
			},
			templateUrl: AccoladeConstants.staticPrefix + '/about/templates/infograph.html'
		}
		return directive;
	}
})();