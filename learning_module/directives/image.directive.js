(function () {
	'use strict';

	angular
		.module('accolade.learningModule.directives')
		.directive('contentImage', contentImage);

	contentImage.$inject = ['AccoladeConstants'];

	function contentImage(AccoladeConstants) {
		var directive = {
			restrict: 'E',
			scope: {
				info: '='
			},
			templateUrl: AccoladeConstants.staticPrefix + '/learning_module/templates/image.html'
		}
		return directive;
	}
})();