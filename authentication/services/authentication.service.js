(function () {
	'use strict';

	angular
		.module('accolade.authentication.services')
		.factory('Authentication', Authentication);

	Authentication.$inject = ['$cookies', '$http', '$location'];

	function Authentication($cookies, $http, $location) {

		var Authentication = {
			register: register,
			login: login,
			logout: logout,
			getAuthenticatedAccount: getAuthenticatedAccount,
			isAuthenticated: isAuthenticated,
			setAuthenticatedAccount: setAuthenticatedAccount,
			unauthenticate: unauthenticate,
			unauthorisedRedirect: unauthorisedRedirect,
			authorisedRedirect: authorisedRedirect
		};

		return Authentication;

		/**
		* @name register
		* @desc Try to register a new user
		* @param {string} username The username entered by the user
		* @param {string} password The password entered by the user
		* @param {string} email The email entered by the user
		* @returns {Promise}
		* @memberOf accolade.authentication.services.Authentication
		*/
		function register(email, first_name, last_name, user_type, date_of_birth, password) {
			return $http.post('/api/v1/e', {
				password: password,
				email: email,
				first_name: first_name,
				last_name: last_name,
				date_of_birth: date_of_birth,
				user_type: user_type
			}).then(registerSuccessFn, registerErrorFn);

			/**
			* @name registerSuccessFn
			* @desc Log the new user in
			*/
			function registerSuccessFn(data, status, headers, config) {
		    	Authentication.login(data.data.email, data.data.password);
			}

			/**
			* @name registerErrorFn
			* @desc Log "Epic failure!" to the console
			*/
			function registerErrorFn(data, status, headers, config) {
				console.error('Registration failed');
				console.log(data.data);
			}
		}

		/**
		 * @name login
		 * @desc Try to log in with email `email` and password `password`
		 * @param {string} email The email entered by the user
		 * @param {string} password The password entered by the user
		 * @returns {Promise}
		 * @memberOf accolade.authentication.services.Authentication
		 */
		function login(email, password) {
			return $http.post('/api/v1/auth/login', {
		    	email: email, password: password
			}).then(loginSuccessFn, loginErrorFn);
		

			/**
			 * @name loginSuccessFn
			 * @desc Set the authenticated account and redirect to index
			 */
			function loginSuccessFn(data, status, headers, config) {
				Authentication.setAuthenticatedAccount(data.data);

				window.location = '/';
			}

			/**
			 * @name loginErrorFn
			 * @desc Log "Epic failure!" to the console
			 */
			function loginErrorFn(data, status, headers, config) {
				console.error('Login failed');
			}
		}

		/**
		 * @name logout
		 * @desc Try to log the user out
		 * @returns {Promise}
		 * @memberOf accolade.authentication.services.Authentication
		 */
		function logout() {
		  	return $http.post('/api/v1/auth/logout')
		    	.then(logoutSuccessFn, logoutErrorFn);

		  	/**
		   	* @name logoutSuccessFn
		   	* @desc Unauthenticate and redirect to index with page reload
		   	*/
		  	function logoutSuccessFn(data, status, headers, config) {
		    	Authentication.unauthenticate();

		    	window.location = '/';
		  	}

		  	/**
		   	* @name logoutErrorFn
		   	* @desc Log "Epic failure!" to the console
		   	*/
		  	function logoutErrorFn(data, status, headers, config) {
		    	console.error('Epic failure!');
		  	}
		}
		

		/**
		 * @name getAuthenticatedAccount
		 * @desc Return the currently authenticated account
		 * @returns {object|undefined} Account if authenticated, else `undefined`
		 * @memberOf accoalade.authentication.services.Authentication
		 */
		function getAuthenticatedAccount() {
			if (!$cookies.authenticatedAccount) {
		    	return;
		    }

		    return JSON.parse($cookies.authenticatedAccount);
		}

		/**
		 * @name isAuthenticated
		 * @desc Check if the current user is authenticated
		 * @returns {boolean} True is user is authenticated, else false.
		 * @memberOf accolade.authentication.services.Authentication
		 */
		function isAuthenticated() {
		    return !!$cookies.authenticatedAccount;
		}

		/**
		 * @name setAuthenticatedAccount
		 * @desc Stringify the account object and store it in a cookie
		 * @param {Object} user The account object to be stored
		 * @returns {undefined}
		 * @memberOf accolade.authentication.services.Authentication
		 */
		function setAuthenticatedAccount(account) {
		    $cookies.authenticatedAccount = JSON.stringify(account);
		}

		/**
		 * @name unauthenticate
		 * @desc Delete the cookie where the user object is stored
		 * @returns {undefined}
		 * @memberOf accolade.authentication.services.Authentication
		 */
		function unauthenticate() {
		    delete $cookies.authenticatedAccount;
		}

		function unauthorisedRedirect() {
			if (!Authentication.isAuthenticated()) {
			    $location.url('/');
			}
		}

		function authorisedRedirect() {
			if (Authentication.isAuthenticated()) {
			    $location.url('/');
			}
		}
	}
})();