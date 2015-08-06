(function () {
  'use strict';

  	angular
    	.module('accolade.learningModule', [
      		'accolade.learningModule.controllers',
	      	'accolade.learningModule.services',
            'accolade.learningModule.directives'
      	]);

  	angular
	    .module('accolade.learningModule.controllers', ['ui.bootstrap', 'ngSanitize']);

  	angular
	    .module('accolade.learningModule.services', []);

    angular
        .module('accolade.learningModule.directives', []);
})();