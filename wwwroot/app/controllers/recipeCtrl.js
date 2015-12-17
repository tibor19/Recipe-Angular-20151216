(function(angular){
        var app = angular.module('recipeApp');
        app.controller('RecipeController', 
                ['$scope', '$routeParams', 'recipeSvc', 
        function($scope, $routeParams, recipeService){
                $scope.data = {message : "hello world"};
                
                $scope.recipe = recipeService.getRecipe($routeParams.id || 1);
                
                $scope.edit = function(recipe){
                        $scope.originalRecipe = angular.copy(recipe);
                        $scope.isEditing = true;
                }
                
                $scope.save = function(recipe){
                        recipeService.updateRecipe()
                        .then(function(){
                             $scope.isEditing = false;
                        });
                }
                $scope.reset = function(originalRecipe){
                        $scope.recipe = angular.copy(originalRecipe);
                        $scope.recipeForm.$setPristine();
                        $scope.isEditing = false;
                }
                
                $scope.click = function (){
                        alert($scope.data.message);
                }
        }]);
 
})(angular);


