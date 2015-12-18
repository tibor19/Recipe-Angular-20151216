(function(angular){
        
        var app = angular.module('recipeApp', ['ngResource', 'ngRoute']);
        
        app.config(['$logProvider', function($logProvider){
                $logProvider.debugEnabled(true);
        }]);
        
        app.config(['$routeProvider', 'config', 'recipeSvcProvider', function($routeProvider, config, recipeSvcProvider){
                
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

                recipeSvcProvider.config(config.remoteServer);
        }]);
        
        app.run(['$rootScope', '$filter', 'recipeValue', 'config', function($rootScope, $filter, recipeValue, config){
                $rootScope.myVal = 10;
                
                var filterF = $filter('image');
                console.log(filterF('abc'));
                
                console.log('First run', recipeValue);
                
                console.log('Run: ', config);
        }]);
        app.run(['$injector', function($injector){
               
               
               var func = function(a, b, c){
                       
               }
               
               console.log(func);
                // $injector.invoke(function(recipeValue){
                //         console.log('Injector run no deps',recipeValue);       
                // });
                
                $injector.invoke(['recipeValue', function(recipeValue){
                        console.log('Injector run',recipeValue);       
                }]);
                
                function injectable(recipeValue){
                        console.log('Injectable function',recipeValue);       
                }
                
                injectable.$inject = ['recipeValue'];
                
                $injector.invoke(injectable);
        }]);
 
})(angular);
