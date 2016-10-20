app.service("generoAPI", function($http, config, userService){

	this.getGeneros = function(){
		return $http.get(config.baseURL+"/generos",{headers: userService.getHeader('GET', 'generos', null, null)});
	};

	this.getGeneroById = function(id){
		return $http.get(config.baseURL+"/generos/"+id, {headers: userService.getHeader('GET', 'generos/'+id, null, null)});
	};

	this.adicionarGenero = function(genero){
		return $http.post(config.baseURL+"/generos", genero, {headers: userService.getHeader('POST', 'generos', null, genero)});
	};

	this.atualizarGenero = function(genero){
		return $http.put(config.baseURL+"/generos", genero, {headers: userService.getHeader('PUT', 'generos', null, genero)});
	};
});
