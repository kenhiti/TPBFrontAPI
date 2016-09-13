app.controller("cadastroEditoraCtrl", function($scope,$routeParams, editoraAPI) {
	$scope.titulo = "Nova Editora";

	$scope.editora = {};

	$scope.message = "";
	$scope.type = "";
	$scope.render = false;

	$scope.salvar = function(editora){

		var $promisse;

		if($routeParams.id != undefined){
			$promisse = editoraAPI.atualizarEditora(editora);
		}
		else{
			$promisse = editoraAPI.adicionarEditora(editora);
		}

		$promisse.then(function(success){
			delete $scope.editora;
			$scope.message = "Editora salva com sucesso.";
			$scope.type = "alert alert-success TexAlCenter";
			$scope.render = true;

			$scope.titulo = "Cadastrar Editora";
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
		editoraAPI.getEditoraById($routeParams.id).success(function(data){
			$scope.editora = data;
		});
	};

	if($routeParams.id != undefined){
		buscarEdicao();
		$scope.titulo = "Editar editora";
	}

});
