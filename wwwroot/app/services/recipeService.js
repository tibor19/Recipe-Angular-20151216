(function(angular){
		var app = angular.module('recipeApp');
		
		app.service('recipeService', ['$resource', 'config', function($resource, config){
			var resource = $resource(config.remoteServer +'/:id', 
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
			
		    this.updateRecipe = function (recipe){
				return resource.update({id: recipe.recipeID}, recipe).$promise;
			}
		}])
})(angular);