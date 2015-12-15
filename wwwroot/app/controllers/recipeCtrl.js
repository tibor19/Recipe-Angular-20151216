(function(angular){
        var app = angular.module('recipeApp');
        app.controller('RecipeController', 
                ['$scope', '$routeParams', 'recipeService', 
        function($scope, $routeParams, recipeService){
                $scope.recipe = recipeService.getRecipe($routeParams.id || 1);
                
                $scope.edit = function(){
                        $scope.originalRecipe = angular.copy($scope.recipe);
                        $scope.isEditing = true;
                }
                
                $scope.save = function(){
                        recipeService.updateRecipe($scope.recipe)
                        .then(function(){
                             $scope.isEditing = false;
                        });
                }
                $scope.reset = function(){
                        $scope.recipe = angular.copy($scope.originalRecipe);
                        $scope.recipeForm.$setPristine();
                        $scope.isEditing = false;
                }
        }]);
 
})(angular);


