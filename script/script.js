(function(window, document, undefined) {
	'use strict';
	angular.module('myApp', ['ular.greyGoose'])
	.controller('PreviewController', ['$scope', function($scope){
		
	}]).directive('preview', ['$sce', '$compile', '$preview', function($sce, $compile, $preview){
		return {
			restrict : 'A',
			scope: true,
			link: function(scope, element, attr) {
				$preview({scope, element, attr});
			}
		};
	}]);
})(window, document);