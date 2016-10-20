app.controller("cadastroGeneroCtrl", function($scope,$routeParams, generoAPI) {
	$scope.titulo = "Novo Gênero";

	$scope.genero = {};

	$scope.message = "";
	$scope.type = "";
	$scope.render = false;

	$scope.salvar = function(genero){
		console.log(genero);
		var $promisse;

		if($routeParams.id != undefined){
			$promisse = generoAPI.atualizarGenero(genero);
		}
		else{
			$promisse = generoAPI.adicionarGenero(genero);
		}

		$promisse.then(function(success){
			delete $scope.genero;
			$scope.message = "Gênero salvo com sucesso.";
			$scope.type = "alert alert-success TexAlCenter";
			$scope.render = true;

			$scope.titulo = "Cadastrar Gênero";
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
		generoAPI.getGeneroById($routeParams.id).success(function(data){
			$scope.genero = data;
		});
	};

	if($routeParams.id != undefined){
		buscarEdicao();
		$scope.titulo = "Editar Gênero";
	}

});
