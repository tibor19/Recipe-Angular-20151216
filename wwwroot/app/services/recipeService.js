(function(angular){
		var app = angular.module('recipeApp');
		
		app.service('recipeService', ['$resource', function($resource){
			var resource = $resource('http://recipewebapi.azurewebsites.net/api/Recipes/:id', 
			{
				id: '@id'
			}, {
				update: {
					method: 'PUT'
				}
			});
			
			this.getRecipe = function(id){
				return resource.get({id: id}); 
			}

			this.getRecipes = resource.query;
			
		}])
})(angular);