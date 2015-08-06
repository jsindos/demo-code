(function () {
  'use strict';

  	angular
    	.module('accolade.class', [
      		'accolade.class.controllers',
	      	'accolade.class.services',
          'accolade.class.directives'
      	]);

  	angular
	    .module('accolade.class.controllers', ['ui.bootstrap']);

  	angular
	    .module('accolade.class.services', []);

    angular
        .module('accolade.class.directives', []);
})();