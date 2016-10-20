app.controller("pesquisaLivroCtrl", function($scope, livros){
	$scope.livros = livros.data;

	$scope.livroSelecionado = {};

	$scope.hideModalView = function(){
		$('#modalView').modal('hide');
	}

	$scope.showModalView = function(livro){
		$scope.livroSelecionado = livro;
		console.log("Livro Selecionado : ");

		console.log($scope.livroSelecionado);
		$('#modalView').modal('show');
	}

	$scope.renderMessage = function(){
		$scope.message = "Obrigado por curtir...";
		$scope.type = "alert alert-success TexAlCenter";
		$scope.render = true;
	}

	console.log("Livros : ");
	console.log($scope.livros);
});