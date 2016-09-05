app.controller("cadastroAutorCtrl", function($scope,$routeParams, autorAPI) {
	$scope.titulo = "Cadastrar Autor";

	$scope.autor = {};

	$scope.message = "";
	$scope.type = "";
	$scope.render = false;		
	
	$scope.salvar = function(autor){		

		var $promisse;

		if($routeParams.id != undefined){
			$promisse = autorAPI.atualizarAutor(autor);
		}
		else{
			$promisse = autorAPI.adicionarAutor(autor);	
		}

		$promisse.then(function(success){
			delete $scope.autor;
			$scope.message = "Autor salvo com sucesso.";
			$scope.type = "alert alert-success TexAlCenter";
			$scope.render = true;
			
			$scope.titulo = "Cadastrar Autor";
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
		autorAPI.getAutorById($routeParams.id).success(function(data){
			$scope.autor = data;
		});
	};	
	
	if($routeParams.id != undefined){
		buscarEdicao();
		$scope.titulo = "Editar autor";
	}
	
});