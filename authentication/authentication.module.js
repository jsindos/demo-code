(function () {
	'use strict';

	angular
		.module('accolade.authentication', [
			'accolade.authentication.controllers',
			'accolade.authentication.services'
			]);

	angular
		.module('accolade.authentication.controllers', []);

	angular
		.module('accolade.authentication.services', ['ngCookies']);
})();