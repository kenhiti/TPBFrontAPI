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

	$routeProvider.otherwise({
		redirectTo: '/login'
	});
});
