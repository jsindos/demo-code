(function () {
	'use strict';

	angular
		.module('accolade.learningModule.controllers')
		.controller('LearningModuleController', LearningModuleController);

	LearningModuleController.$inject = ['$scope', '$routeParams', 'LearningModule', '$modal', '$location', 'AccoladeConstants'];

	function LearningModuleController($scope, $routeParams, LearningModule, $modal, $location, AccoladeConstants) {
		var vm = this;

		/**
		 * Tracks the status of every quiz in the learning module.
		 * @type {Array}
		 */
		vm.quizStates = [];
		vm.quizzesIncomplete = quizzesIncomplete;
		vm.completeModule = completeModule;
		vm.openPinModal = openPinModal;

		activate($routeParams.moduleId);

		function quizzesIncomplete() {
			for (var i = 0 ; i < vm.quizStates.length ; i++) {
				if (vm.quizStates[i].quizComplete === false) return true;
			}
			return false;
		}

		function completeModule() {
			LearningModule.completeModule($routeParams.moduleId).then(completeModuleSuccessFn, completeModuleErrorFn);

			function completeModuleSuccessFn(data, status, headers, config) {
				vm.earnedPin = data.data;
				if (vm.earnedPin.exists) vm.pinModalHtml = 'pin.previously_completed.modal.html';
				else vm.pinModalHtml = 'pin.completed.modal.html';
				vm.openPinModal();
			}

			function completeModuleErrorFn(data, status, headers, config) {
				console.error('error completing module');
			}
		}

		function openPinModal() {
  			var modalInstance = $modal.open({
                animation: true,
				templateUrl: AccoladeConstants.staticPrefix + '/learning_module/templates/' + vm.pinModalHtml,
                scope: $scope
  			});

  			modalInstance.result.then(goToProfile);

  			function goToProfile() {  					    	
      			$location.url('/');
  			}
		}

		function activate(moduleId) {
			LearningModule.getModule(moduleId).then(getModuleSuccessFn, getModuleErrorFn);

			function getModuleSuccessFn(data, status, headers, config) {
				recordQuizzesAsIncomplete(data.data);
			    vm.learningModule = data.data;
			}

			function getModuleErrorFn(data, status, headers, config) {
			    console.error('error retrieving learning module');
			}

			function recordQuizzesAsIncomplete(learningModule) {
				for (var i = 0 ; i < learningModule.content.length ; i++) {
					if (learningModule.content[i].quiz != null) {
						learningModule.content[i].quiz.quizComplete = false;
						vm.quizStates.push(learningModule.content[i].quiz);
					}
				}
			}
		}
	}
})();