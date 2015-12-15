(function(angular){
        
        var app = angular.module('recipeApp', ['ngResource', 'ngRoute']);
        
        app.config(['$logProvider', function($logProvider){
                $logProvider.debugEnabled(true);
        }]);
        
        app.config(['$routeProvider', function($routeProvider){
                
                function redirectFn(){
                        return '/recipe/' + (Math.round(Math.random()*8) + 1);                        
                }
                
                $routeProvider.when('/', 
                        {templateUrl: 
                                'app/templates/home.html'
                        })
                $routeProvider.when('/recipe/:id',
                        {
                                templateUrl: 'app/templates/recipe.html',
                                controller: 'RecipeController'
                        }
                );
                
                $routeProvider.when('/weeklyMenu',
                        {
                                templateUrl: 'app/templates/weeklyMenu.html',
                                controller: 'WeeklyMenuController',
                                resolve: {
                                        recipes : ['recipeService',
                                                function (recipeService) {
                                                        return recipeService.getRecipes();
                                                } 
                                        ]
                                }
                        }
                );
                $routeProvider.when('/recipe', {redirectTo: redirectFn });
                
                $routeProvider.otherwise({redirectTo: '/'});
        }]);
        
        app.run(['$rootScope', function($rootScope){
                $rootScope.myVal = 10;
        }]);
 
})(angular);
