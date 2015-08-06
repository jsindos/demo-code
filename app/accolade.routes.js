(function () {
	'use strict';

	angular
		.module('accolade.routes')
		.config(config);


	config.$inject = ['$routeProvider', 'AccoladeConstants', '$sceDelegateProvider'];

	/**
	* @name config
	* @desc Define valid application routes
	*/
	function config($routeProvider, AccoladeConstants, $sceDelegateProvider) {

		$sceDelegateProvider.resourceUrlWhitelist([
	    	// Allow same origin resource loads.
	    	'self',
	    	// Allow loading from our assets domain.  Notice the difference between * and **.
	    	"https://s3-ap-southeast-2.amazonaws.com/elasticbeanstalk-ap-southeast-2-619437133608/**"
  		]);

		$routeProvider.when('/builder', {
			templateUrl: AccoladeConstants.staticPrefix + '/builder/builder.html',
			controller: 'BuilderController',
			controllerAs: 'vm'
		}).when('/login', {
			templateUrl: AccoladeConstants.staticPrefix + '/authentication/login.html',
			controller: 'LoginController',
			controllerAs: 'vm'
		}).when('/register', {
			templateUrl: AccoladeConstants.staticPrefix + '/authentication/register.html',
			controller: 'RegisterController',
			controllerAs: 'vm'
		}).when('/course/:courseId', {
			templateUrl: AccoladeConstants.staticPrefix + '/course/templates/course.html',
			controller: 'CourseController',
			controllerAs: 'vm'
		}).when('/module/:moduleId', {
			templateUrl: AccoladeConstants.staticPrefix + '/learning_module/templates/learning_module.html',
			controller: 'LearningModuleController',
			controllerAs: 'vm'
		}).when('/about', {
			templateUrl: AccoladeConstants.staticPrefix + '/about/templates/about.html',
			controller: 'AboutController',
			controllerAs: 'vm'
		}).when('/profile', {
			templateUrl: AccoladeConstants.staticPrefix + '/profile/templates/profile.html',
			controller: 'ProfileController',
			controllerAs: 'vm'
		}).when('/earned_badges', {
			templateUrl: AccoladeConstants.staticPrefix + '/earned/templates/earned.badges.html',
			controller: 'EarnedBadgesController',
			controllerAs: 'vm'
		}).when('/earned_pins', {
			templateUrl: AccoladeConstants.staticPrefix + '/earned/templates/earned.pins.html',
			controller: 'EarnedPinsController',
			controllerAs: 'vm'
		}).when('/terms-conditions', {
			templateUrl: AccoladeConstants.staticPrefix + '/legal/Terms-Conditions.html'
		}).when('/cookie-policy', {
			templateUrl: AccoladeConstants.staticPrefix + '/legal/Terms-Conditions.html'
		}).when('/privacy-policy', {
			templateUrl: AccoladeConstants.staticPrefix + '/legal/Terms-Conditions.html'
		}).when('/jobs', {
			templateUrl: AccoladeConstants.staticPrefix + '/jobs/jobs.html'
		}).when('/FAQ', {
			templateUrl: AccoladeConstants.staticPrefix + '/faq/faq.html'
		}).when('/join_class', {
			templateUrl: AccoladeConstants.staticPrefix + '/class/templates/join_class.html',
			controller: 'JoinClassController',
			controllerAs: 'vm'
		}).otherwise({
			redirectTo: '/redirecting',
			templateUrl: AccoladeConstants.staticPrefix + '/landing/landing.html',
			controller: 'LandingController',
			controllerAs: 'vm'
		});
	}
})();