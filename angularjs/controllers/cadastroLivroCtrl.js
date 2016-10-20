app.controller("cadastroLivroCtrl", function($scope,$routeParams, livroAPI,autorAPI, categoriaAPI, fileAPI, editoras,autores,categorias,generos) {
	$scope.titulo = "Novo Livro";

	$scope.editoras = editoras.data;
	$scope.autores = autores.data;
	$scope.categorias = categorias.data;
	$scope.generos = generos.data;

	$scope.livro = {};

	$scope.message = "";
	$scope.type = "";
	$scope.render = false;	

	$scope.renderPdfButton = false;

	$scope.renderImageButton = false;

	$scope.listaAutoresSelecionados = [];
	$scope.listaCategoriasSelecionadas = [];

	$scope.convertToByteArray = function(type){

    	var file = null;

    	if(type === "Image"){
    		file = $scope.image;
    	}
    	if(type === "Pdf"){
    		file = $scope.pdf;
    	}    	   	
		
		var $promisse = fileAPI.salvarArquivo('livros',file, type);
		$promisse.then(function(success){
    		console.log("Sucesso.");
    		console.log(success);
    		if(type === "Image"){
    			$scope.livro.capa = success.data;
    			$scope.image = null;
    		}
    		else if(type === "Pdf"){
    			$scope.livro.pdf = success.data;
    			$scope.pdf = null;
    		}
    		console.log("Livro = ");
    		console.log($scope.livro);

    	}, function(error){
    		console.log("Erro ao carregar arquivo."); 
    		console.log(error);    		
    	});    	
    };

    $scope.adicionarAutorSelecionado = function(autor){		
		
		for(index = 0; index < $scope.autores.length; index++){
			if($scope.autores[index] == autor[0]){	
				$scope.listaAutoresSelecionados.push($scope.autores[index]);			
				$scope.autores.splice(index, 1);				
			}	
		}
	};

	$scope.excluirAutorSelecionado = function(autor){		
		
		for(index = 0; index < $scope.listaAutoresSelecionados.length; index++){
			if($scope.listaAutoresSelecionados[index] == autor[0]){	
				$scope.autores.push($scope.listaAutoresSelecionados[index]);			
				$scope.listaAutoresSelecionados.splice(index, 1);				
			}	
		}
	};

	 $scope.adicionarCategoriaSelecionada = function(categoria){		
		
		for(index = 0; index < $scope.categorias.length; index++){
			if($scope.categorias[index] == categoria[0]){	
				$scope.listaCategoriasSelecionadas.push($scope.categorias[index]);			
				$scope.categorias.splice(index, 1);				
			}	
		}
	};

	$scope.excluirCategoriaSelecionada = function(categoria){		
		
		for(index = 0; index < $scope.listaCategoriasSelecionadas.length; index++){
			if($scope.listaCategoriasSelecionadas[index] == categoria[0]){	
				$scope.categorias.push($scope.listaCategoriasSelecionadas[index]);			
				$scope.listaCategoriasSelecionadas.splice(index, 1);				
			}	
		}
	};

	$scope.salvar = function(livro){
		$scope.livro.categoria = $scope.listaCategoriasSelecionadas;
		$scope.livro.autores = $scope.listaAutoresSelecionados;
		console.log(livro);
		
		var $promisse;

		if($routeParams.id != undefined){
			$promisse = livroAPI.atualizarLivro(livro);
		}
		else{
			$promisse = livroAPI.adicionarLivro(livro);
		}

		$promisse.then(function(success){
			delete $scope.livro;
			$scope.message = "Livro salvo com sucesso.";
			$scope.type = "alert alert-success TexAlCenter";
			$scope.render = true;
			
			$scope.titulo = "Cadastrar Livro";
		}, function(error){
			$scope.message = "Erro ao salvar dados.";
			$scope.type = "alert alert-danger TexAlCenter";
			
			$scope.render = true;
		});
		recarregarListaAutor();
		recarregarListaCategoria();
		$scope.listaAutoresSelecionados = [];
		$scope.listaCategoriasSelecionadas = [];
	};	

	var buscarEdicao = function(){
		livroAPI.getLivroById($routeParams.id).success(function(data){
			$scope.livro = data;
		});
	};

	if($routeParams.id != undefined){
		buscarEdicao();
		$scope.titulo = "Editar Livro";
	};

	var recarregarListaAutor = function(){
		var $promisse = autorAPI.getAutores();

		$promisse.then(function(success){
			console.log(success);
			$scope.autores = success.data;
		}, function(error){
			console.log(error);
		});
	}

	var recarregarListaCategoria = function(){
		var $promisse = categoriaAPI.getCategorias();

		$promisse.then(function(success){
			console.log(success);
			$scope.categorias = success.data;
		}, function(error){
			console.log(error);
		});
	}
});
