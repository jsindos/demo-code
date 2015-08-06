(function () {
	'use strict';

	angular
  		.module('accolade.course.controllers')
  		.controller('PinController', PinController);

	PinController.$inject = ['$scope', '$modal', 'AccoladeConstants'];

	/**
	* @namespace PinController
	*/
	function PinController($scope, $modal, AccoladeConstants) {
  		var vm = this;

        vm.openPin = openPin;
        vm.pinPopover = {
            templateUrl: AccoladeConstants.staticPrefix + '/course/templates/pin.popover.html'
        }

        function pinOpacity() {
            if ($scope.info.status) return 1.0;
            else return 0.3;
        }

        $scope.pinStyle = {
            'opacity': pinOpacity(),
            // 'border-style': pinBorderStyle(),
            // 'border-width': pinBorderSize(),
            // 'border-color': pinBorder()
        }

        function pinBorder() {
            if ($scope.info.status === true) return 'green';
            else return 'maroon';
        }

        function pinBorderStyle() {
            return 'solid';
        }

        function pinBorderSize() {
            return '4px';
        }

        /**
        * @name openPin
        * @desc Triggers opening of the pin modal
        * @desc Model data is sourced from parent scope, which is this scope
        * @desc See accolade.course.directives.pinInfo for how this data is attached
        * @desc Can use a modal controller in the future if more control is needed over modal
        * @memberOf accolade.course.controllers.PinController
        */
        function openPin() {
            var modalInstance = $modal.open({
                animation: true,
                templateUrl: AccoladeConstants.staticPrefix + '/course/templates/pin.modal.html',
                scope: $scope
            });
        }
	}
})();