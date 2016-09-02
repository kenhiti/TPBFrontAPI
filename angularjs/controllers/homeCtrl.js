app.controller("homeCtrl", function($scope, loginService, tplService){
	$scope.message = "Você está na tela de HOME";
	$scope.saudacao = "Obrigado, volte sempre";

	var init = function(){	
		tplService.getClass();			
	};

	init();

	$scope.logout = function(){
		loginService.logout();
	}
});