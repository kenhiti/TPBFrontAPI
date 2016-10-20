app.controller("cadastroContaCtrl", function($scope,$routeParams, contaAPI,perfilAPI, perfis) {
	$scope.titulo = "Nova Conta";

	$scope.perfis = perfis.data;
	$scope.perfilSelecionado;
	$scope.listaPerfisSelecionado = [];

	$scope.conta = {};
	$scope.conta.perfis;

	$scope.message = "";
	$scope.type = "";
	$scope.render = false;

	var perfisAux = [];

	$scope.adicionarPerfilSelecionado = function(perfil){		
		
		for(index = 0; index < $scope.perfis.length; index++){
			if($scope.perfis[index] == perfil[0]){	
				$scope.listaPerfisSelecionado.push($scope.perfis[index]);			
				$scope.perfis.splice(index, 1);				
			}	
		}
	};

	$scope.excluirPerfilSelecionado = function(perfil){		
		
		for(index = 0; index < $scope.listaPerfisSelecionado.length; index++){
			if($scope.listaPerfisSelecionado[index] == perfil[0]){	
				$scope.perfis.push($scope.listaPerfisSelecionado[index]);			
				$scope.listaPerfisSelecionado.splice(index, 1);				
			}	
		}
	};

	$scope.salvar = function(conta){
		$scope.conta.perfis = $scope.listaPerfisSelecionado;
		console.log(conta);
		var $promisse;

		if($routeParams.id != undefined){
			$promisse = contaAPI.atualizarConta(conta);
		}
		else{
			$promisse = contaAPI.adicionarConta(conta);
		}

		$promisse.then(function(success){
			delete $scope.conta;
			$scope.message = "Conta salva com sucesso.";
			$scope.type = "alert alert-success TexAlCenter";
			$scope.render = true;
			
			$scope.titulo = "Cadastrar Conta";
		}, function(error){
			$scope.message = "Erro ao salvar dados.";
			$scope.type = "alert alert-danger TexAlCenter";
			
			$scope.render = true;
		});
		recarregarLista();
		$scope.listaPerfisSelecionado = [];
	};

	$scope.listaVazia = function(){
		return listaPerfisSelecionado.length === 0;
	}

	$scope.close = function(){
		$scope.render = !$scope.render;
	}

	var buscarEdicao = function(){
		contaAPI.getContaById($routeParams.id).success(function(data){
			$scope.conta = data;
		});
	};

	if($routeParams.id != undefined){
		buscarEdicao();
		$scope.titulo = "Editar Conta";
	}

	var recarregarLista = function(){
		var $promisse = perfilAPI.getPerfis();

		$promisse.then(function(success){
			console.log(success);
			$scope.perfis = success.data;
		}, function(error){
			console.log(error);
		});
	}
});
