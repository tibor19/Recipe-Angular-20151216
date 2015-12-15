(function(angular){
		var app = angular.module('recipeApp');
		
		app.factory('recipeFactory', ['$http', function($http){
			
			function getRecipe(id){
				
				return $http.get('/data/recipe.json').
					then(function(httpResponse){
						return httpResponse.data;
					});
			}
			function getRecipes(){
				return $http.get('/data/recipies.json').
					then(function(httpResponse){
						return httpResponse.data;
					});
			}
			
			var returnObject ={
				getRecipe:  getRecipe,
				getRecipes: getRecipes
			} 
			return returnObject;
			
		}])
})(angular);