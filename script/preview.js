(function(window, document, undefined) {
	'use strict';
	angular.module('ular.greyGoose.preview', [])
	.provider('$preview', function () {
		this.$get = ['$window', '$rootScope', '$timeout', function($window, $rootScope, $timeout){
			function PreviewFactory(){
				console.log('asdasd');
			}
			function findElement(query, element) {
				return angular.element((element || document).querySelector(query));
			}
			return PreviewFactory;
		}];
	}).directive('preview', ['$sce', '$compile', '$preview', function($sce, $compile, $preview){
		return {
			restrict : 'A',
			scope: true,
			link: function(scope, element, attr) {
				angular.element(element).bind('change', function(){
					console.log(element[0].value);
					console.log(this.files);
					var FR= new FileReader();
					FR.onload = function(e) {
						var newDirective = angular.element('<img src="'+e.target.result+'"/>');
						angular.element(document.querySelector('#preview')).empty().append(newDirective)
						$compile(newDirective)(scope);
					};       
					FR.readAsDataURL( this.files[0] );
				});
				var sliderres = $preview();
			}
		};
	}]);
	angular.module('ular.greyGoose', [ 'ular.greyGoose.preview' ]);
})(window, document);