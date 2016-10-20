app.service("livroAPI", function($http, config, userService){

	this.getLivros = function(){
		return $http.get(config.baseURL+"/livros",{headers: userService.getHeader('GET', 'livros', null, null)});
	};

	this.getLivroById = function(id){
		return $http.get(config.baseURL+"/livros/"+id, {headers: userService.getHeader('GET', 'livros/'+id, null, null)});
	};

	this.adicionarLivro = function(livro){
		return $http.post(config.baseURL+"/livros", livro, {headers: userService.getHeader('POST', 'livros', null, livro)});
	};

	this.atualizarLivro = function(livro){
		return $http.put(config.baseURL+"/livros", livro, {headers: userService.getHeader('PUT', 'livros', null, livro)});
	};
});
