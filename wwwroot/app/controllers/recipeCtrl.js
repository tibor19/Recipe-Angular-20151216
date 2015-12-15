(function(angular){
        var app = angular.module('recipeApp');
        app.controller('RecipeController', 
                ['$scope', 'recipeFactory', 
                        function($scope, recipeService){
                                recipeService.getRecipe().then(function(data){
                                   $scope.recipe = data;     
                                });        
                        }]);
 
})(angular);


