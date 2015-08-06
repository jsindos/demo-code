(function () {
	'use strict';

	angular
		.module('accolade', [
			'accolade.constants',
			'accolade.config',
			'accolade.routes',
			'accolade.builder',
			'accolade.authentication',
			'accolade.layout',
			'accolade.course',
			'accolade.learningModule',
			'accolade.landing',
			'accolade.profile',
			'accolade.earned',
			'accolade.class',
			'accolade.about'
		]);

	angular
		.module('accolade.constants', []);

	angular
		.module('accolade.routes', ['ngRoute']);

	angular
		.module('accolade.config', []);

	angular
	  	.module('accolade')
	  	.run(run);

	run.$inject = ['$http'];

	/**
	* @name run
	* @desc Update xsrf $http headers to align with Django's defaults
	*/
	function run($http) {
	  	$http.defaults.xsrfHeaderName = 'X-CSRFToken';
	  	$http.defaults.xsrfCookieName = 'csrftoken';
	}
})();