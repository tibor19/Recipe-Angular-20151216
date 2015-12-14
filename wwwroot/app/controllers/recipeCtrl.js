(function(angular, recipe){
        var app = angular.module('recipeApp');
        app.controller('RecipeController', ['$scope', function($scope){
                $scope.recipe = recipe;        
        }]);
        
        
 
})(angular, recipe);


