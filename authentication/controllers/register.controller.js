(function () {
    'use strict';

    angular
        .module('accolade.authentication.controllers')
        .controller('RegisterController', RegisterController);

    RegisterController.$inject = ['$location', '$scope', 'Authentication'];

    /**
    * @namespace RegisterController
    */
    function RegisterController($location, $scope, Authentication) {
        var vm = this;
		vm.password = "";
		vm.password1 = "";
		vm.password2 = "";
		vm.pwError = "";
		vm.matchingPasswords = false;
        vm.register = register;
		vm.user_type = "EARNER";
		vm.checkPW = matchingPw;
		vm.canRegister = false;
		vm.agree = false;
        activate();

        /**
        * @name activate
        * @desc Actions to be performed when this controller is instantiated
        * @memberOf accolade.authentication.controllers.RegisterController
        */
        function activate() {
            // If the user is authenticated, they should not be here.
            Authentication.authorisedRedirect();
        }
		function matchingPw(){
			if(vm.password1 == vm.password2){
				vm.pwError = "";
				vm.matchingPasswords = true;
				vm.password = vm.password1;
			}
			else{
				vm.pwError="Passwords do not match.";
				vm.matchingPasswords = false;
			}
		}
        /**
        * @name register
        * @desc Register a new user
        * @memberOf accolade.authentication.controllers.RegisterController
        */
        function register() {
            Authentication.register(vm.email, vm.first_name, vm.last_name, vm.user_type, vm.date_of_birth, vm.password);
        }
    }
})();