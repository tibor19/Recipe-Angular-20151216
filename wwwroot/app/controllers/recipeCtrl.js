(function(angular){
        var app = angular.module('recipeApp');
        app.controller('RecipeController', 
                ['$scope', 'recipeService', 
                        function($scope, recipeService){
                                $scope.recipe = recipeService.getRecipe(1);
                        }]);
 
})(angular);


