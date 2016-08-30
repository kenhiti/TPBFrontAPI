app.controller("homeController", function($scope, $rootScope,$location, tplService, usuarioContaAPI){
	$scope.contas = [];
	$scope.contaSelecionada = {};

	$scope.showWarningConta = false;
	$scope.showComboConta = false;
	$rootScope.showDropDown = false;

	var init = function(){
		var $promisse = usuarioContaAPI.getContasPorUsuario($rootScope.idUsuarioLogado);

		$promisse.then(function(success){			
			$scope.contas = success.data;

			if($scope.contas.length > 1){
				
				$scope.showComboConta = true;
				console.log("Usuario com mais de uma conta.");
				tplService.setClass(true,true,false,true,true,true,true,true,true,false,true);
			}
			else{
				tplService.getClass();
				var conta = success.data;
				$rootScope.contaSelecionada = conta[0].conta;
				$rootScope.showDropDown = true;
			}

			console.log('Contas.length = ');
			console.log($scope.contas);

		}, function(error){
			tplService.setClass(true,true,false,true,true,true,true,true,true,false,true);
			$scope.showWarningConta = true;
			$rootScope.showDropDown = false;
		});
	};

	init();
	
	$scope.selecionar= function(){
		$rootScope.contaSelecionada = $scope.contaSelecionada.conta;
		$scope.showWarningConta = false;
		$scope.showComboConta = false;
		$rootScope.showDropDown = true;
		tplService.getClass();
	};

	$scope.cancelar = function(){
		$rootScope.preAuth = false;
		$rootScope.authenticated = false;
		$location.path('/login');
	};
});