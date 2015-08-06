(function () {
	'use strict';

	angular
		.module('accolade.profile.directives')
		.directive('profileCourse', profileCourse)

	profileCourse.$inject = ['AccoladeConstants'];

	function profileCourse(AccoladeConstants) {
		var directive = {
			restrict: 'E',
			scope: {
				info: '='
			},
			templateUrl: AccoladeConstants.staticPrefix + '/profile/templates/course.html'
		}

		return directive;
	}
})();