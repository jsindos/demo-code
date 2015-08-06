(function () {
	'use strict';

	angular
		.module('accolade.earned.services')
		.factory('Earned', Earned)

	Earned.$inject = ['$http'];

	function Earned($http) {

		var Earned = {
			getBadgePins: getBadgePins
		}

		return Earned;

		/**
		* @name getBadgePins
		* @desc Retrieving badges and associated pins
		* @param {string} email The unique id of the user
		* @returns {Promise}
		* @memberOf accolade.earned.services.Earned
		*/
		function getBadgePins(email) {
			return $http.get('/api/v1/e/earned_badges');
		}

		/*function getPins(email) {
			return $http.get('/api/v1/earner/' + email + '/pins');
		}*/
	}
})();