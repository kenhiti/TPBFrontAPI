app.service("contaAPI", function($http, config, userService){

	this.getContas = function(){
		return $http.get(config.baseURL+"/contas",{headers: userService.getHeader('GET', 'contas', null, null)});
	};

	this.getContaById = function(id){
		return $http.get(config.baseURL+"/contas/"+id, {headers: userService.getHeader('GET', 'contas/'+id, null, null)});
	};

	this.adicionarConta = function(conta){
		return $http.post(config.baseURL+"/contas", conta, {headers: userService.getHeader('POST', 'contas', null, conta)});
	};

	this.atualizarConta = function(conta){
		return $http.put(config.baseURL+"/contas", conta, {headers: userService.getHeader('PUT', 'contas', null, conta)});
	};
});
