(function () {
	'use strict';

	angular
		.module('accolade.class.controllers')
		.controller('JoinClassController', JoinClassController);

	JoinClassController.$inject = ['$scope', '$modal','$location', 'AccoladeConstants',  'Class'];

	function JoinClassController($scope, $modal, $location, AccoladeConstants, Class) {
		var vm = this;
		vm.joinClass = joinClass;
		vm.openClassModal = openClassModal;
		vm.errorMessage="";
		
		function joinClass()
		{
			Class.joinClass(vm.password, vm.classCode).then(joinClassSuccessFn, joinClassErrorFn);
			function joinClassSuccessFn(data, status, headers, config) {
				vm.class = data.data;				
				vm.errorMessage="";
				vm.openClassModal();
			}

			function joinClassErrorFn(data, status, headers, config) {
				vm.errorMessage=data.data.error;
			}
		}


		function openClassModal() {
  			var modalInstance = $modal.open({
                animation: true,
				templateUrl: AccoladeConstants.staticPrefix + '/class/templates/class.modal.html',
                scope: $scope
  			});

  			modalInstance.result.then(goToProfile);

  			function goToProfile() {  					    	
      			$location.url('/');
  			}
		}
	}
})();