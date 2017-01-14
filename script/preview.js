(function(window, document, undefined) {
	'use strict';
	angular.module('ular.greyGoose.preview', [])
	.provider('$preview', function () {
		this.$get = ['$window', '$rootScope', '$timeout', function($window, $rootScope, $timeout){
			function PreviewFactory(opt){
				angular.element(opt.element).bind('change', function(){
					var FR= new FileReader();
					FR.onload = function(e) {
						var newDirective = angular.element('<img src="'+e.target.result+'"/>');
						angular.element(document.querySelector(opt.attr.previewWrapper)).empty().append(newDirective)
						$compile(newDirective)(opt.scope);
					};       
					FR.readAsDataURL( opt.element[0].files[0] );
				});
			}
			function findElement(query, element) {
				return angular.element((element || document).querySelector(query));
			}
			return PreviewFactory;
		}];
	});
	angular.module('ular.greyGoose', [ 'ular.greyGoose.preview' ]);
})(window, document);