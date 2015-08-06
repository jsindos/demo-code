(function () {
	'use strict';

	angular
		.module('accolade.about.directives')
		.directive('issuerImage', issuerImage);

	issuerImage.$inject = ['AccoladeConstants'];

	function issuerImage(AccoladeConstants) {
		var directive = {
			controller: 'AboutController',
			controllerAs: 'vm',
			restrict: 'E',
			scope: {
				info: '@info'
			},
			templateUrl: AccoladeConstants.staticPrefix + '/about/templates/issuer.html'
		}
		return directive;
	}
})();