(function () {
	'use strict';

	angular
		.module('accolade.learningModule.services')
		.factory('LearningModule', LearningModule);

	LearningModule.$inject = ['$http'];

	function LearningModule($http) {

		var LearningModule = {
			getModule: getModule,
			completeModule: completeModule
		}

		return LearningModule

		/**
		* @name getModule
		* @desc Retrieving a learning module
		* @param {string} courseId The unique id of the module
		* @returns {Promise}
		* @memberOf accolade.learningModule.services.LearningModule
		*/
		function getModule(moduleId) {
			return $http.get('/api/v1/modules/' + moduleId);
		}

		function completeModule(moduleId) {
			return $http.post('/api/v1/receipt/issue-pin', {moduleId:moduleId});
		}
	}
})();