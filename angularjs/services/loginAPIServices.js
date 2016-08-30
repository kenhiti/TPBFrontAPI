angular.module("agoApp").service("loginAPI", function($http, config, userService){
	
	this.login = function(data){
		var headers = userService.getHeader('GET', 'login', data, null);
		console.log(headers);
		return $http.get(config.baseURL+"/login", { headers : headers});
	};		
	
	this.recuperarConta = function(email){
		var headers = {
			"Content-Type": "text/plain"
		}
		return $http.post(config.baseURL+"/login/recuperaConta", email, {headers :headers});
	};

	this.confirmarConta =  function(id){
		var headers = {
			"Content-Type": "text/plain"
		}
		return $http.put(config.baseURL+"/login/confirmacao", id, {headers: headers});
	};
	
	this.solicitarAcesso = function(usuario){
		return $http.post(config.baseURL+"/login/solicitacao",usuario);
	};

	this.verificarCPF = function(cpf){
		return $http.get(config.baseURL+"/login/verificarCPF/"+cpf);		
	};

	this.verificarEmail = function(email){
		return $http.get(config.baseURL+"/login/verificarEmail/"+email);
	}
	
	this.novaSenha = function(id, senhas){
		return $http.post(config.baseURL+"/login/novasenha/"+id, senhas);
	}

});