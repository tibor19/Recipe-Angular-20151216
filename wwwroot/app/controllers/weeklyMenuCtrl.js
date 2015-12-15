(function(angular){
        var app = angular.module('recipeApp');
        app.controller('WeeklyMenuController', ['$scope', 'recipes', function($scope, recipes){
                $scope.recipes = recipes;       
        }]);
})(angular);


