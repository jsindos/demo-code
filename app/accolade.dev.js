(function () {
	'use strict';

	angular
		.module('accolade.dev', [
			'accolade',
			'ngMockE2E'
		]);

	angular
		.module('accolade.dev')
		.run(run);

	run.$inject = ['$httpBackend', 'MockData'];

	function run($httpBackend, MockData) {

		var registeredUsers = {};

		$httpBackend
			.when('GET', /\.html$/)
			.passThrough();

		$httpBackend
			.whenPOST('/api/v1/auth/login/')
			.respond(loginResponseFn);

		function loginResponseFn(method, url, data) {
			var login = JSON.parse(data);
			if (login.email in registeredUsers 
				&& registeredUsers[login.email] == login.password) {
				return [200, data, {}];
			} else {
				return [401];
			}
		}

		$httpBackend
			.whenPOST('/api/v1/accounts/')
			.respond(registerResponseFn);

		function registerResponseFn(method, url, data) {
			var login = JSON.parse(data);
			registeredUsers[login.email] = login.password;
			return [200, data, {}];
		}

		$httpBackend
			.whenPOST('/api/v1/auth/logout/')
			.respond(logoutResponseFn);

		function logoutResponseFn(method, url, data) {
			return [200];
		}

		$httpBackend
			.whenGET(/\/api\/v1\/courses\/[^\s]+/)
			.respond(courseGetResponseFn);

		function courseGetResponseFn(method, url) {
			return [200, MockData.courseTemplate, {}];
		}

		$httpBackend
			.whenGET(/\/api\/v1\/modules\/[^\s]+/)
			.respond(moduleGetResponseFn);

		function moduleGetResponseFn(method, url) {
			return [200, MockData.learningModule, {}];
		}

		$httpBackend
			.whenGET(/\/api\/v1\/earner\/[^\s]+\/courses/)
			.respond(userCourseGetResponseFn);

		function userCourseGetResponseFn() {
			return [200, MockData.userCourses, {}];
		}

		$httpBackend
			.whenPOST(/\/api\/v1\/modules\/[^\s]+/)
			.respond(modulePostResponseFn);

		function modulePostResponseFn() {
			return [200, MockData.pin, {}];
		}

		$httpBackend
			.whenGET(/\/api\/v1\/earner\/[^\s]+\/badges-pins/)
			.respond(badgePinsGetResponseFn);

		function badgePinsGetResponseFn() {
			return [200, MockData.badgePins, {}];
		}

		$httpBackend
			.whenGET(/\/api\/v1\/earner\/[^\s]+\/pins/)
			.respond(earnedPinsGetResponseFn);

		function earnedPinsGetResponseFn() {
			return [200, MockData.pins, {}];
		}
		$httpBackend
			.whenGET(/\/api\/v1\/receipt\/joinClass\/[^\s]+/)
			.respond(joinClassSuccessFn);

		function joinClassSuccessFn() {
			return [200, MockData.joinedClass, {}];
		}
	}
})();