(function () {
	'use strict';

	angular
		.module('accolade.learningModule.directives')
		.directive('contentListText', contentListText);

	contentListText.$inject = ['AccoladeConstants'];

	function contentListText(AccoladeConstants) {
		var directive = {
			restrict: 'E',
			scope: {
				info: '='
			},
			templateUrl: AccoladeConstants.staticPrefix + '/learning_module/templates/list.html'
		}
		return directive;
	}
})();