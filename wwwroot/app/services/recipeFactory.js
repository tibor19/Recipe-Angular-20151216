(function(angular){
		var app = angular.module('recipeApp');
		
		app.factory('recipeFactory', ['$q','recipeValue', 'recipesValue', function($q,recipeValue, recipesValue){
			
			function getRecipe(){
				
				return $q.when(recipeValue);
			}
			function getRecipes(){
				return $q.when(recipeValue);
			}
			
			var returnObject ={
				value : recipeValue,
				getRecipe:  getRecipe,
				getRecipes: getRecipes
			} 
			return returnObject;
			
		}])
})(angular);