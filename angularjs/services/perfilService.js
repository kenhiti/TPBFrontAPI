app.service("perfilAPI", function($http, config, userService){

	this.getPerfis = function(){
		return $http.get(config.baseURL+"/perfis",{headers: userService.getHeader('GET', 'perfis', null, null)});
	};

	this.getPerfilById = function(id){
		return $http.get(config.baseURL+"/perfis/"+id, {headers: userService.getHeader('GET', 'perfis/'+id, null, null)});
	};

	this.adicionarPerfil = function(perfil){
		return $http.post(config.baseURL+"/perfis", perfil, {headers: userService.getHeader('POST', 'perfis', null, perfil)});
	};

	this.atualizarPerfil = function(perfil){
		return $http.put(config.baseURL+"/perfis", perfil, {headers: userService.getHeader('PUT', 'perfis', null, perfil)});
	};
});