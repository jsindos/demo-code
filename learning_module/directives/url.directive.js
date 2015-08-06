(function () {
	'use strict';

	angular
		.module('accolade.learningModule.directives')
		.directive('contentUrl', contentUrl);

	contentUrl.$inject = ['AccoladeConstants'];

	function contentUrl(AccoladeConstants) {
		var directive = {
			restrict: 'E',
			scope: {
				info: '='
			},
			templateUrl: AccoladeConstants.staticPrefix + '/learning_module/templates/url.html'
		}
		return directive;
	}
})();