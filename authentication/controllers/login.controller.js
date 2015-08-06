(function () {
	'use strict';

	angular
  		.module('accolade.authentication.controllers')
  		.controller('LoginController', LoginController);

	LoginController.$inject = ['$location', '$scope', 'Authentication'];

	/**
	* @namespace LoginController
	*/
	function LoginController($location, $scope, Authentication) {
  		var vm = this;

  		vm.login = login;

  		activate();

  		/**
  		* @name activate
  		* @desc Actions to be performed when this controller is instantiated
  		* @memberOf accolade.authentication.controllers.LoginController
  		*/
  		function activate() {
    		// If the user is authenticated, they should not be here.
    		Authentication.authorisedRedirect();
	  	}

	  	/**
	  	* @name login
	  	* @desc Log the user in
	  	* @memberOf accolade.authentication.controllers.LoginController
	  	*/
	  	function login() {
	    	Authentication.login(vm.email, vm.password);
	  	}
	}
})();