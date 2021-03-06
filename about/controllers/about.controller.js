(function () {
	'use strict';

	angular
  		.module('accolade.about.controllers')
  		.controller('AboutController', AboutController);

	AboutController.$inject = ['$scope', 'AccoladeConstants'];

	/**
	* @namespace AboutController
	*/
	function AboutController($scope, AccoladeConstants) {
  		var vm = this;
      	vm.staticPrefix = AccoladeConstants.staticPrefix;
	}
})();