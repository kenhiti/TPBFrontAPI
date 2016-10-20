app.controller("cadastroCategoriaCtrl", function($scope,$routeParams, categoriaAPI) {
	$scope.titulo = "Nova Categoria";

	$scope.categoria = {};

	$scope.message = "";
	$scope.type = "";
	$scope.render = false;

	$scope.salvar = function(categoria){
		console.log(categoria);
		var $promisse;

		if($routeParams.id != undefined){
			$promisse = categoriaAPI.atualizarCategoria(categoria);
		}
		else{
			$promisse = categoriaAPI.adicionarCategoria(categoria);
		}

		$promisse.then(function(success){
			delete $scope.categoria;
			$scope.message = "Categoria salva com sucesso.";
			$scope.type = "alert alert-success TexAlCenter";
			$scope.render = true;

			$scope.titulo = "Cadastrar Categoria";
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
		categoriaAPI.getCategoriaById($routeParams.id).success(function(data){
			$scope.categoria = data;
		});
	};

	if($routeParams.id != undefined){
		buscarEdicao();
		$scope.titulo = "Editar Categoria";
	}

});
