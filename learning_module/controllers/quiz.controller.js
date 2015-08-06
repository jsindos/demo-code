(function () {
	'use strict';

	angular
		.module('accolade.learningModule.controllers')
		.controller('QuizController', QuizController);

	QuizController.$inject = ['$scope', '$http', 'Quiz', '$rootScope', 'AccoladeConstants'];

	function QuizController($scope, $http, Quiz, $rootScope,AccoladeConstants) {
		var vm = this;

		/**
		 * The url of the hosted quiz. 
		 * @type {String}
		 */
		vm.quizUrl = 'http://localhost:8000/api/v1/quiz' + $scope.info.url + '/take/';
		
		/**
		 * @name completeQuiz
		 * @description Updates the quizComplete field of the $scope to true.
		 * @description This is used by the iframe in which the quiz is contained when the quiz is completed.
		 * @description quizComplete is shared with the outside $scope of the whole learning module.  
		 */
		$scope.completeQuiz = function() {
			$scope.info.quizComplete = true;
			$rootScope.$digest();
		}

		/** 
		 * @ignore activate/Quiz service currently unused, as we are using an iframe to directly insert the quiz.
		 * @name activate
		 * @description Retrieve quiz through api call
		 * @param {string} quizId The unique id of the quiz
		 * @memberOf accolade.learningModule.controllers.QuizController
		 */
		function activate(quizId) { 
		    Quiz.getQuiz(quizId).then(QuizSuccessFn, QuizErrorFn);

		    function QuizSuccessFn(data, status, headers, config) {
		    	var html = trustHtml(data.data);
		        vm.quiz = html;
		    }

		    function QuizErrorFn(data, status, headers, config) {
		        console.error('error retrieving Quiz');
		    }

		    function trustHtml(html) {
		    	//return $sce.trustAsHtml(html);
		    }
		}


	}
})();