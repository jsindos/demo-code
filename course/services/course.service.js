(function () {
	'use strict';

	angular
		.module('accolade.course.services')
		.factory('Course', Course)

	Course.$inject = ['$http'];

	function Course($http) {

		var Course = {
			getCourse: getCourse,
			getUserCourses: getUserCourses,
			completeBadge: completeBadge
		}

		return Course;

		/**
		* @name getCourse
		* @desc Retrieving a course
		* @param {string} courseId The unique id of the course
		* @returns {Promise}
		* @memberOf accolade.course.services.Course
		*/
		function getCourse(courseId) {
			return $http.get('/api/v1/e/courses/' + courseId);
		}
		
		function completeBadge(badgeId){
			return $http.post('/api/v1/receipt/issue-badge', {badgeId:badgeId});
		}

		//NOT REQUIRED!!
		function getUserCourses(email) {
			return $http.get('/api/v1/e/courses');
		}
	}
})();