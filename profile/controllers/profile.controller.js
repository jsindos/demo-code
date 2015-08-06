(function () {
	'use strict';

	angular
  		.module('accolade.profile.controllers')
  		.controller('ProfileController', ProfileController);

    ProfileController.$inject = ['Authentication', 'Course', '$location'];

	/**
	* @namespace ProfileController
	*/
	function ProfileController(Authentication, Course, $location) {
  		var vm = this;
		
		vm.displayNoCoursesMsg = false;
        activate();

        function activate() {
            // If the user is not authenticated, they should not be here.
            Authentication.unauthorisedRedirect();

            var email = Authentication.getAuthenticatedAccount()['email'];

            Course.getUserCourses(email).then(courseSuccessFn, courseErrorFn);

            function courseSuccessFn(data, status, headers, config) {
                vm.courses = data.data;
				if(vm.courses.results.length < 1)
				{
					vm.displayNoCoursesMsg = true;
				}
            }

            function courseErrorFn(data, status, headers, config) {
                console.error('error retrieving course');
            }
        }
	}
})();