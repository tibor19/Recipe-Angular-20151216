(function(angular){
	var module = angular.module('recipeApp', []);
        
        module.controller('DemoController', 
        function($scope){
		$scope.countries = [
                        {id : 1, name:"Romania"},
                        {id : 2, name:"UK"},
                        {id : 3, name:"France"}
                ];		
        });
        	
})(angular);
