(function () {
	'use strict';

	angular
		.module('accolade.learningModule.directives')
		.directive('contentQuiz', contentQuiz);

	contentQuiz.$inject = ['AccoladeConstants'];

	function contentQuiz(AccoladeConstants) {
		var directive = {
			controller: 'QuizController',
			controllerAs: 'vm',
			restrict: 'E',
			scope: {
				info: '='
			},
			templateUrl: AccoladeConstants.staticPrefix + '/learning_module/templates/quiz.html'
		}
		return directive;
	}
})();