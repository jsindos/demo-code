(function () {
	'use strict';

	angular
		.module('accolade.learningModule.services')
		.factory('Quiz', Quiz)

	Quiz.$inject = ['$http'];

	function Quiz($http) {

		var Quiz = {
			getQuiz: getQuiz
		}

		return Quiz;

		/**
		* @name getQuiz
		* @desc Retrieving a quiz
		* @param {string} quizId The unique id of the quiz
		* @returns {Promise}
		* @memberOf accolade.learnindModule.services.Quiz
		*/
		function getQuiz(quizId) {
			return $http.get('/api/v1/quiz' + quizId + '/take/');
		}

	}
})();