(function () {
	'use strict';

	angular
		.module('accolade.learningModule.controllers')
		.controller('VideoController', VideoController);

	VideoController.$inject = ['$scope', '$sce'];

	function VideoController($scope, $sce) {
		var vm = this;
		
		$scope.trustSrc = function(src) {
			var url = src.replace("watch?v=", "embed/");
			return $sce.trustAsResourceUrl(url);
		}
	}
})();