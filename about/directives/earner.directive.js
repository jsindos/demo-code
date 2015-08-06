(function () {
	'use strict';

	angular
		.module('accolade.about.directives')
		.directive('earnerImage', earnerImage);

	earnerImage.$inject = ['AccoladeConstants'];

	function earnerImage(AccoladeConstants) {
		var directive = {
			controller: 'AboutController',
			controllerAs: 'vm',
			restrict: 'E',
			scope: {
				info: '@info'
			},
			templateUrl: AccoladeConstants.staticPrefix + '/about/templates/earner.html'
		}
		return directive;
	}
})();