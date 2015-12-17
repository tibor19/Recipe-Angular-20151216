export interface IRecipeService{
	getRecipe();
	getRecipes();
}

(function(angular){

		class RecipeServiceTS implements IRecipeService{
			
			static $inject = ['recipeValue', 'recipesValue'];
			
			constructor(private recipeValue, private recipesValue){
			}
			
			getRecipe(){
				return this.recipeValue;
			}
			getRecipes(){
				return this.recipesValue;
			}
		}

		var app = angular.module('recipeApp');
		
		app.service('recipeServiceTS', RecipeServiceTS);
})(angular);


