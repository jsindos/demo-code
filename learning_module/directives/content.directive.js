(function () {
	'use strict';

	angular
		.module('accolade.learningModule.directives')
		.directive('contentParent', contentParent);

	contentParent.$inject = ['$compile'];

	function contentParent($compile) {
		var directive = {
			restrict: 'E',
			scope: {
				info: '='
			},
			link: function(scope, element, attrs) {
				var type = getContentType(scope.info);
				var dir = $('<content-' + type + ' info=info.' + type + '></content-' + type + '>');
				dir.appendTo(element);
				$compile(element.contents())(scope);
			}
		}
		return directive;

		function getContentType(content) {
			if (content.url != null) {
				return 'url';
			} else if (content.image != null) {
				return 'image';
			} else if (content.quiz != null) {
				return 'quiz';
			} else if (content.text != null) {
				return 'text';
			} else if (content.video != null) {
				return 'video';
			} else if (content.list_text != null) {
				return 'list_text';
			}
		}
	}
})();