(function(angular){
		var app = angular.module('recipeApp');
		
		app.service('recipeService', ['$resource', function($resource){
			var resource = $resource('/data/recipe.json');
			
			this.getRecipe = function(){
				var result = resource.get();
				console.log(result);
				return result.$promise;
			}
			this.getRecipes = function(){
				return resource.query();
			}
			
		}])
})(angular);