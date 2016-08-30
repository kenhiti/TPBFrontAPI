app.controller("loginCtrl", function($scope, loginService){
	console.log("loginCtrl");

	$scope.message = "PPI2.";

	$scope.loginData = {};
	
	$scope.login = function(loginData){		
		loginService.login(loginData, $scope);		
	};
});