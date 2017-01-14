(function(window, document, undefined) {
	'use strict';
	angular.module('ular.greyGoose.preview', [])
	.provider('$preview', function () {
		this.$get = function(){
			function PreviewFactory(opt){
				angular.element(opt.element).bind('change', function(){
					angular.element(document.querySelector(opt.attr.previewWrapper)).empty();
					if(opt.element[0].files.length != 0){
						for(var i = 0; i < opt.element[0].files.length; i++){
							var FR= new FileReader();
							FR.onload = function(e) {
								var newDirective = angular.element('<img src="'+e.target.result+'"/>');
								angular.element(document.querySelector(opt.attr.previewWrapper)).append(newDirective);
							};       
							FR.readAsDataURL( opt.element[0].files[i] );
						}
					}else{
						angular.element(document.querySelector(opt.attr.previewWrapper)).empty().text('0 File selected');
					}
				});
			}
			function findElement(query, element) {
				return angular.element((element || document).querySelector(query));
			}
			return PreviewFactory;
		};
	});
	angular.module('ular.greyGoose', [ 'ular.greyGoose.preview' ]);
})(window, document);