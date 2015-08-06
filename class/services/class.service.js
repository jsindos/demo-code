(function () {
	'use strict';

	angular
		.module('accolade.class.services')
		.factory('Class', Class);

	Class.$inject = ['$http'];

	function Class($http) {

		var Class = {
			joinClass: joinClass
		}

		return Class
		
		function joinClass(password, classCode) {
			return $http.put('/api/v1/receipt/join-class/' + classCode,{password:password, code:classCode} );
		}
	}
})();