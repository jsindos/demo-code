(function () {
	'use strict';

	angular
  		.module('accolade.course.controllers')
  		.controller('BadgeModalController', BadgeModalController);

	BadgeModalController.$inject = ['$scope', '$modalInstance', 'info', 'Course', '$modal', 'AccoladeConstants', '$location'];

	/**
	* @namespace BadgeModalController
    * @desc Controller for badge modals. Currently unused.
	*/
	function BadgeModalController($scope, $modalInstance, info, Course, $modal, AccoladeConstants, $location) {
  		var vm = this;

      vm.info = info;
  	  vm.ok = ok;
	  vm.earnedBadgeModalHtml = 'badge.completed.modal.html';
      vm.getBadge = getBadge;
      vm.canEarn = canEarn();	  
	  vm.openEarnedBadgeModal = openEarnedBadgeModal;

      /**
       * Turn the earned status of the badge into a boolean corresponding to the badge being earnable
       */
      function canEarn() {
        if (vm.info.status == 'can_earn') return true;
        else return false;
      }

  		/**
  		* @name ok
  		* @desc 
  		* @memberOf accolade.course.controllers.BadgeModalController
  		*/
  		function ok() {
            $modalInstance.close();
  		}

      function getBadge() {
        // Write code here to call backend to aquire badge
		//api/v1/receipt/issue-badge
		Course.completeBadge(vm.info.id).then(completeBadgeSuccessFn,completeModuleErrorFn);
		function completeBadgeSuccessFn(data, status, headers, config) {
				vm.earnedBadge = data.data;
				if(vm.earnedBadge.exists) vm.earnedBadgeModalHtml = 'badge.previously_completed.modal.html';
				else vm.earnedBadgeModalHtml = 'badge.completed.modal.html';
				vm.openEarnedBadgeModal();
			}

			function completeModuleErrorFn(data, status, headers, config) {
				console.error('error completing badge');
			}
        //$modalInstance.close()
      }
	  function openEarnedBadgeModal() {
  			var modalInstance = $modal.open({
                animation: true,
				templateUrl: AccoladeConstants.staticPrefix + '/course/templates/' + vm.earnedBadgeModalHtml,
                scope: $scope
  			});

  			modalInstance.result.then(goToProfile);

  			function goToProfile() {  	
				$modalInstance.close()			
      			$location.url('/');
  			}
		}
	}
})();