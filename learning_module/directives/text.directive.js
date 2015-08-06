(function () {
	'use strict';

	angular
		.module('accolade.learningModule.directives')
		.directive('contentText', contentText);

	contentText.$inject = ['AccoladeConstants'];

	function contentText(AccoladeConstants) {
		var directive = {
			restrict: 'E',
			scope: {
				info: '='
			},
			templateUrl: AccoladeConstants.staticPrefix + '/learning_module/templates/text.html'
		}
		return directive;
	}
})();