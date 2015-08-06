(function () {
	'use strict';

	angular
		.module('accolade.learningModule.directives')
		.directive('contentVideo', contentVideo);

	contentVideo.$inject = ['AccoladeConstants'];

	function contentVideo(AccoladeConstants) {
		var directive = {
			controller: 'VideoController',
			restrict: 'E',
			scope: {
				info: '='
			},
			templateUrl: AccoladeConstants.staticPrefix + '/learning_module/templates/video.html'
		}
		return directive;
	}
})();