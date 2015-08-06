(function () {
	'use strict';

	angular
  		.module('accolade.course.controllers')
  		.controller('CourseController', CourseController);

	CourseController.$inject = ['$scope', '$routeParams', 'Course'];

	/**
	* @namespace CourseController
	*/
	function CourseController($scope, $routeParams, Course) {
  		var vm = this;

        vm.courseId = $routeParams.courseId;

        activate(vm.courseId);

        /**
        * @name courseDetails
        * @desc Retrieve course details
        * @param {string} courseId The unique id of the course
        * @memberOf accolade.course.controllers.CourseController
        */
        function activate(courseId) { 
            Course.getCourse(courseId).then(courseSuccessFn, courseErrorFn);

            function courseSuccessFn(data, status, headers, config) {
                vm.course = data.data;
            }

            function courseErrorFn(data, status, headers, config) {
                console.error('error retrieving course');
            }
        }


	}
})();