(function(angular){
		var app = angular.module('recipeApp');
		
		app.provider('recipeSvc', function(){

			var remoteServer;
			function RecipeSvc($resource){
				var resource = $resource(remoteServer +'/:id', 
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
			}

			return {
				$get : function($resource) {
					if(remoteServer){
						return new RecipeSvc($resource);
					}
					else{
						throw new Error('You need to config the service first!');
					}
				},
				config: function(server){
					remoteServer = server;
				}
			}
		}); 

})(angular);