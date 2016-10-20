app.controller("cadastroPerfilCtrl", function($scope,$routeParams, perfilAPI) {
	$scope.titulo = "Novo Perfil";

	$scope.perfil = {};

	$scope.message = "";
	$scope.type = "";
	$scope.render = false;

	$scope.showPopupInicio = false;
	$scope.showPopupFim = false;

	$scope.datePattern = 'dd/MM/yyyy';

	$scope.dateOptions = {	    
	    formatYear: 'yyyy',
	    formatMonth: 'MM',
	    minDate: new Date(),
	    startingDay: 1
    };

    $scope.openPopupInicio = function(){
    	$scope.showPopupInicio = !$scope.showPopupInicio; 
    };

    $scope.openPopupFim= function(){
    	$scope.showPopupFim = !$scope.showPopupFim; 
    };

	$scope.salvar = function(perfil){
		console.log(perfil);
		var $promisse;

		if($routeParams.id != undefined){
			$promisse = perfilAPI.atualizarPerfil(perfil);
		}
		else{
			$promisse = perfilAPI.adicionarPerfil(perfil);
		}

		$promisse.then(function(success){
			delete $scope.perfil;
			$scope.message = "Perfil salvo com sucesso.";
			$scope.type = "alert alert-success TexAlCenter";
			$scope.render = true;

			$scope.titulo = "Cadastrar Perfil";
		}, function(error){
			$scope.message = "Erro ao salvar dados.";
			$scope.type = "alert alert-danger TexAlCenter";
			$scope.render = true;
		});
	};

	$scope.close = function(){
		$scope.render = !$scope.render;
	}

	var buscarEdicao = function(){
		perfilAPI.getPerfilById($routeParams.id).success(function(data){
			$scope.perfil = data;
		});
	};

	if($routeParams.id != undefined){
		buscarEdicao();
		$scope.titulo = "Editar Perfil";
	}

});
