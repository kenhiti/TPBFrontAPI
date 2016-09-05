app.service("autorAPI", function($http, config, userService){

	this.getAutores = function(){
		return $http.get(config.baseURL+"/autores",{headers: userService.getHeader('GET', 'autores', null, null)});
	};
	
	this.getAutorById = function(id){
		return $http.get(config.baseURL+"/autores/"+id, {headers: userService.getHeader('GET', 'autores/'+id, null, null)});
	};
	
	this.adicionarAutor = function(autor){
		return $http.post(config.baseURL+"/autores", autor, {headers: userService.getHeader('POST', 'autores', null, autor)});
	};

	this.atualizarAutor = function(autor){
		return $http.put(config.baseURL+"/autores", autor, {headers: userService.getHeader('PUT', 'autores', null, autor)});
	};
});