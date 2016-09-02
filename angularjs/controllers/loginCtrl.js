app.controller("loginCtrl", function($scope, loginService, tplService){
	tplService.getClass();

	$scope.message = "PPI2.";

	$scope.loginData = {};
	
	$scope.login = function(loginData){		
		loginService.login(loginData, $scope);		
	};
});