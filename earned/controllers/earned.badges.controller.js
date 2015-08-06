(function () {
	'use strict';

	angular
  		.module('accolade.earned.controllers')
  		.controller('EarnedBadgesController', EarnedBadgesController);

    EarnedBadgesController.$inject = ['Earned', 'Authentication', 'AccoladeConstants'];

	/**
	* @namespace EarnedBadgesController
	*/
	function EarnedBadgesController(Earned, Authentication, AccoladeConstants) {
  		var vm = this;
		vm.displayNoBadgesMsg = false;

        vm.badgePopover = {
            templateUrl: AccoladeConstants.staticPrefix + '/earned/templates/badge.popover.html'
        }

        activate();

        function activate() {
            // If the user is not authenticated, they should not be here.
            Authentication.unauthorisedRedirect();

            var email = Authentication.getAuthenticatedAccount()['email'];

            Earned.getBadgePins(email).then(getBadgePinsSuccessFn, getBadgePinsErrorFn);

            function getBadgePinsSuccessFn(data, status, headers, config) {
                vm.badgePins = data.data;
				console.log(vm.badgePins);
				if(vm.badgePins.length <1)
				{
					vm.displayNoBadgesMsg = true;
				}
            }

            function getBadgePinsErrorFn(data, status, headers, config) {
                console.error('error retrieving badges and pins');
            }
        }
	}
})();