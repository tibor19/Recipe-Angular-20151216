
(function(){
		var app = angular.module('recipeApp');
		
		app.filter('image', function(){
			
			return function(src){
				if(src){
					return `content/Images/food/${src}.jpg`;
				}
				return '';
			}
			
		});
})();