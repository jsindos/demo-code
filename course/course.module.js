(function () {
	'use strict';

	angular
		.module('accolade.course', [
			'accolade.course.controllers',
			'accolade.course.directives',
			'accolade.course.services'
			]);

	angular
		.module('accolade.course.controllers', ['ui.bootstrap']);

	angular
		.module('accolade.course.directives', []);

	angular
		.module('accolade.course.services', []);
})();