(function () {
	'use strict';

	angular
		.module('accolade.about.directives')
		.directive('developerImage', developerImage);

	developerImage.$inject = ['AccoladeConstants'];

	function developerImage(AccoladeConstants) {
		var directive = {
			controller: 'AboutController',
			controllerAs: 'vm',
			restrict: 'E',
			scope: {
				info: '@info'
			},
			templateUrl: AccoladeConstants.staticPrefix + '/about/templates/image.html'
		}
		return directive;
	}
})();