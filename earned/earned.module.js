(function () {
	'use strict';

	angular
		.module('accolade.earned', [
			'accolade.earned.controllers',
			'accolade.earned.directives',
			'accolade.earned.services'
		]);

	angular
		.module('accolade.earned.controllers', ['ui.bootstrap']);

	angular
		.module('accolade.earned.directives', []);

	angular
		.module('accolade.earned.services', []);
})();