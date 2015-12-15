(function(angular){
		var app = angular.module('recipeApp');
		
		app.service('recipeService', ['recipeValue', 'recipesValue', function(recipeValue, recipesValue){
			
			this.getRecipe = function(){
				return recipeValue;
			}
			this.getRecipes = function(){
				return recipesValue;
			}
			
		}])
})(angular);