app.controller("loginCtrl", function($scope, loginService, tplService){
	tplService.getClass();

	$scope.message = "PPI2.";

	$scope.loginData = {};
	
	$scope.mensagem;
	$scope.tipoMensagem;
	$scope.visualizaMensagem = false;
	
	
	$scope.login = function(loginData){		
		loginService.login(loginData, $scope);		
	};
});