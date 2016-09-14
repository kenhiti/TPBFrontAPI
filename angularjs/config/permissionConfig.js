app.run(function($rootScope, $location, loginService){
	$rootScope.authenticated = false;

	var routePermission = ['/home','/cadastroAutor','/pesquisaAutor','/cadastroEditora','/pesquisaEditora'];

	$rootScope.$on('$routeChangeStart', function(){
		var path = $location.path();
		console.log(path);

		if(!$rootScope.authenticated ){
				$location.path('/login');
		}
		else{
			if($rootScope.authenticated){
				$location.path(path);
			}
		}
	});
});
