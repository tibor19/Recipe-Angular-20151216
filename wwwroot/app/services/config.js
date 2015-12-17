(function(angular){
		var app = angular.module('recipeApp');
		
		app.constant('config', {
			remoteServer : 'http://recipewebapi.azurewebsites.net/api/Recipes',
			portNumber : '8000'
		});
})(angular);