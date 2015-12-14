(function(angular){
        
        angular.module('recipeApp.weeklyMenu', []);
        var app = angular.module('recipeApp', ['recipeApp.weeklyMenu']);
        
        app.config(['$logProvider', function($logProvider){
                $logProvider.debugEnabled(true);
        }]);
        
        app.run(['$rootScope', function($rootScope){
                $rootScope.myVal = 10;
        }]);
 
})(angular);
