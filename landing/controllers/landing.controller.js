(function () {
	'use strict';

	angular
  		.module('accolade.landing.controllers')
  		.controller('LandingController', LandingController);

    LandingController.$inject = ['Authentication', '$location'];

	/**
	* @namespace LandingController
	*/
	function LandingController(Authentication, $location) {
  		var vm = this;

        activate();

        function activate() {
            // If the user is authenticated, they should not be here.
            if (Authentication.isAuthenticated()) {
                $location.url('/profile');
            } else {
                $location.url('/about');
            }
        }
	}
})();