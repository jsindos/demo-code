(function () {
	'use strict';

	angular
  		.module('accolade.course.controllers')
  		.controller('BadgeController', BadgeController);

	BadgeController.$inject = ['$scope', '$modal', 'AccoladeConstants'];

	/**
	* @namespace BadgeController
	*/
	function BadgeController($scope, $modal, AccoladeConstants) {
  		  var vm = this;
		    vm.openBadge = openBadge;
        vm.badgePopover = {
            templateUrl: AccoladeConstants.staticPrefix + '/course/templates/badge.popover.html'
        }
		vm.canEarn = canEarn();
        vm.earned = earned();

        function earned() {
          if ($scope.info.status === true) return true;
          else return false;
        }
		function canEarn() {
          if ($scope.info.status === 'can_earn') return true;
          else return false;
        }

        $scope.badgeStyle = {
            'opacity': badgeOpacity(),
            // 'border-style': badgeBorderStyle(),
            // 'border-width': badgeBorderSize(),
            // 'border-color': badgeBorder()
        }
		$scope.badgePulse={
			
		}
		function setBorder(){
			if(vm.canEarn == true){
				$scope.badgePulse = 'badge-pulse';
			}
		}
        function badgeOpacity() {
            if ($scope.info.status === true) return 1.0;
			else if ($scope.info.status === 'can_earn') return 0.7;
            else return 0.3;
        }

        function badgeBorder() {
            if ($scope.info.status === true) return 'green';
            else if ($scope.info.status === 'can_earn') return 'yellow';
            else return 'maroon';
        }

        function badgeBorderStyle() {
            return 'solid';
        }

        function badgeBorderSize() {
            return '4px';
        }

        /**
        * @name openBadge
        * @desc Triggers opening of the badge modal
        * @desc Model data is sourced from parent scope, which is this scope
        * @desc See accolade.course.directives.badgeInfo for how this data is attached
        * @desc Can use a modal controller in the future if more control is needed over modal
        * @memberOf accolade.course.controllers.BadgeController
        */
  		function openBadge() {
  			var modalInstance = $modal.open({
                animation: true,
				templateUrl: AccoladeConstants.staticPrefix + '/course/templates/badge.modal.html',
                controller: 'BadgeModalController',
                controllerAs: 'vm',
                resolve: {
                    info: function() {
                        return $scope.info
                    }
                }
  			});
  		}
		setBorder();
	}
})();