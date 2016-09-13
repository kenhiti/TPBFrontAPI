app.service("editoraAPI", function($http, $config, userService) {

  this.getEditora = function {
    return $http.get(config.baseURL+"/editoras", {headers: userService.getHeader('GET', 'autores', null, null)});
  };

  this.getEditoraById = function(id) {
    return $http.get(config.baseURL+"/editoras/"+id, {headers: userService.getHeader('GET', 'editoras/'+id, null, null)});
  };

  this.adicionarEditora = function(editora) {
    return $http.post(config.baseURL+"/editoras", editora, {headers: userService.getHeader('POST', 'editoras', null, editora)});
  };

  this.atualizarEditora = function(editora) {
    return $http.put(config.baseURL+"/editoras", editora, {headers: userService.getHeader('PUT', 'editoras', null, editora)});
  };
});
