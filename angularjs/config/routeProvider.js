app.config(function($routeProvider){
	$routeProvider.when('/login',{
		templateUrl: '/thePirateBook/angularjs/view/login.html',
		controller : 'loginCtrl'
	});

	$routeProvider.when("/home",{
		templateUrl : '/thePirateBook/angularjs/view/home.html',
		controller : 'homeCtrl'
	});


	$routeProvider.when("/cadastroAutor", {
		templateUrl : '/thePirateBook/angularjs/view/cadastroAutor.html',
		controller : 'cadastroAutorCtrl'
	});

	$routeProvider.when("/cadastroAutor/:id", {
		templateUrl : '/thePirateBook/angularjs/view/cadastroAutor.html',
		controller : 'cadastroAutorCtrl'
	});

	$routeProvider.when("/pesquisaAutor", {
		templateUrl : '/thePirateBook/angularjs/view/pesquisaAutor.html',
		controller : 'pesquisaAutorCtrl',
		resolve:{
			autores: function(autorAPI){
				return autorAPI.getAutores();
			}
		}
	});

	$routeProvider.when("/cadastroEditora", {
		templateUrl : '/thePirateBook/angularjs/view/cadastroEditora.html',
		controller : 'cadastroEditoraCtrl'
	});

	$routeProvider.when("/cadastroEditora/:id", {
		templateUrl : '/thePirateBook/angularjs/view/cadastroEditora.html',
		controller : 'cadastroEditoraCtrl'
	});

	$routeProvider.when("/pesquisaEditora", {
		templateUrl : '/thePirateBook/angularjs/view/pesquisaEditora.html',
		controller : 'pesquisaEditoraCtrl',
		resolve:{
			editoras: function(editoraAPI){
				return editoraAPI.getEditora();
			}
		}
	});



	$routeProvider.when("/cadastroCategoria", {
		templateUrl : '/thePirateBook/angularjs/view/cadastroCategoria.html',
		controller : 'cadastroCategoriaCtrl'
	});

	$routeProvider.when("/cadastroCategoria/:id", {
		templateUrl : '/thePirateBook/angularjs/view/cadastroCategoria.html',
		controller : 'cadastroCategoriaCtrl'
	});

	$routeProvider.when("/pesquisaCategoria", {
		templateUrl : '/thePirateBook/angularjs/view/pesquisaCategoria.html',
		controller : 'pesquisaCategoriaCtrl',
		resolve:{
			categorias: function(categoriaAPI){
				return categoriaAPI.getCategorias();
			}
		}
	});



	$routeProvider.when("/cadastroGenero",{
		templateUrl : '/thePirateBook/angularjs/view/cadastroGenero.html',
		controller : 'cadastroGeneroCtrl'
	});
	$routeProvider.when("/cadastroGenero/:id",{
		templateUrl : '/thePirateBook/angularjs/view/cadastroGenero.html',
		controller : 'cadastroGeneroCtrl'
	});
	$routeProvider.when("/pesquisaGenero",{
		templateUrl : '/thePirateBook/angularjs/view/pesquisaGenero.html',
		controller : 'pesquisaGeneroCtrl',
		resolve : {
			generos: function(generoAPI){
				return generoAPI.getGeneros();
			}
		}
	});

	$routeProvider.when("/cadastroPerfil",{
		templateUrl : '/thePirateBook/angularjs/view/cadastroPerfil.html',
		controller : 'cadastroPerfilCtrl'
	});
	$routeProvider.when("/cadastroPerfil/:id",{
		templateUrl : '/thePirateBook/angularjs/view/cadastroPerfil.html',
		controller : 'cadastroPerfilCtrl'
	});
	$routeProvider.when("/pesquisaPerfil",{
		templateUrl : '/thePirateBook/angularjs/view/pesquisaPerfil.html',
		controller : 'pesquisaPerfilCtrl',
		resolve : {
			perfis: function(perfilAPI){
				return perfilAPI.getPerfis();
			}
		}
	});

	$routeProvider.when("/cadastroConta",{
		templateUrl : '/thePirateBook/angularjs/view/cadastroConta.html',
		controller : 'cadastroContaCtrl',
		resolve :{
			perfis : function(perfilAPI){
				return perfilAPI.getPerfis();
			}
		}
	});
	$routeProvider.when("/cadastroConta/:id",{
		templateUrl : '/thePirateBook/angularjs/view/cadastroConta.html',
		controller : 'cadastroContaCtrl',
		resolve :{
			perfis : function(perfilAPI){
				return perfilAPI.getPerfis();
			}
		}
	});

	$routeProvider.when("/cadastroLivro",{
		templateUrl : '/thePirateBook/angularjs/view/cadastroLivro.html',
		controller : 'cadastroLivroCtrl',
		resolve :{
			editoras : function(editoraAPI){
				return editoraAPI.getEditora();
			},
			autores : function(autorAPI){
				return autorAPI.getAutores();
			},
			categorias : function(categoriaAPI){
				return categoriaAPI.getCategorias();
			},
			generos : function(generoAPI){
				return generoAPI.getGeneros();
			},
		}
	});
	$routeProvider.when("/cadastroLivro/:id",{
		templateUrl : '/thePirateBook/angularjs/view/cadastroLivro.html',
		controller : 'cadastroLivroCtrl',
		resolve :{
			editoras : function(editoraAPI){
				return editoraAPI.getEditora();
			},
			autores : function(autorAPI){
				return autorAPI.getAutores();
			},
			categorias : function(categoriaAPI){
				return categoriaAPI.getCategorias();
			},
			generos : function(generoAPI){
				return generoAPI.getGeneros();
			},
		}
	});
	$routeProvider.when("/pesquisaLivro",{
		templateUrl : '/thePirateBook/angularjs/view/pesquisaLivro.html',
		controller : 'pesquisaLivroCtrl',
		resolve : {
			livros: function(livroAPI){
				return livroAPI.getLivros();
			}
		}
	});

	$routeProvider.when("/visualizarLivro/:id",{
		templateUrl : '/thePirateBook/angularjs/view/visualizarLivro.html',
		controller : 'visualizarLivroCtrl'
	});

	$routeProvider.otherwise({
		redirectTo: '/login'
	});
});
