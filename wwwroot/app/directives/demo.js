(function(angular){
		var app = angular.module('recipeApp');
		
        app.directive('demoDirective', function demoFn() {
            
            function linkFn(scope, iElement, iAttrs, ctrl, tran) {
                    console.log('linking');
                        iElement.on('click', function () {
                        console.log('Clicked on', iElement);
                        });
                    }
                    
            function compileFn (scope, iElement, iAttrs, ctrl) {
                    console.log('Compile');

                    return linkFn; 
                }
            
            var ddo = {
                    restrict: 'C',
                    compile: compileFn
            }
            
            return ddo;
        });
	
})(angular);
