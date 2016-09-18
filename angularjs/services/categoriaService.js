app.service("categoriaAPI", function($http, config, userService){

	this.getCategorias = function(){
		return $http.get(config.baseURL+"/categorias",{headers: userService.getHeader('GET', 'categorias', null, null)});
	};

	this.getCategoriaById = function(id){
		return $http.get(config.baseURL+"/categorias/"+id, {headers: userService.getHeader('GET', 'categorias/'+id, null, null)});
	};

	this.adicionarCategoria = function(categoria){
		return $http.post(config.baseURL+"/categorias", categoria, {headers: userService.getHeader('POST', 'categorias', null, categoria)});
	};

	this.atualizarCategoria = function(categoria){
		return $http.put(config.baseURL+"/categorias", categoria, {headers: userService.getHeader('PUT', 'categorias', null, categoria)});
	};
});
