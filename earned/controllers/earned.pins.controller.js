(function () {
	'use strict';

	angular
  		.module('accolade.earned.controllers')
  		.controller('EarnedPinsController', EarnedPinsController);

    EarnedPinsController.$inject = ['Earned', 'Authentication'];

	/**
	* @namespace EarnedPinsController
	*/
	function EarnedPinsController(Earned, Authentication) {
  		var vm = this;
		vm.displayNoPinsMsg = false;
        activate();

        function activate() {
            // If the user is not authenticated, they should not be here.
            Authentication.unauthorisedRedirect();

            var email = Authentication.getAuthenticatedAccount()['email'];

            Earned.getPins(email).then(getPinsSuccessFn, getPinsErrorFn);

            function getPinsSuccessFn(data, status, headers, config) {
                vm.pins = data.data;				
				if(vm.pins.length < 1)
				{
					vm.displayNoPinsMsg = true;
				}
            }

            function getPinsErrorFn(data, status, headers, config) {
                console.error('error retrieving pins');
            }
        }
	}
})();