class RecipeServiceTS{
	
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

(function(){
		var app = angular.module('recipeApp');
		
		app.service('recipeServiceTS', RecipeServiceTS);
})();


