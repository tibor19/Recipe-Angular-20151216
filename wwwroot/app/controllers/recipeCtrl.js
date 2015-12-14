(function(angular, recipe){
        var module = angular.module('recipeApp', []);
        module.controller('RecipeController', function($scope){
                $scope.recipe = recipe;        
        });
        
        
 
})(angular, recipe);


