(function(angular){
        
        var app = angular.module('recipeApp', ['ngResource']);
        
        app.config(['$logProvider', function($logProvider){
                $logProvider.debugEnabled(true);
        }]);
        
        app.run(['$rootScope', function($rootScope){
                $rootScope.myVal = 10;
        }]);
 
})(angular);
