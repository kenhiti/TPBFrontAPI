app.service("fileAPI", function($http, config, userService){

	this.salvarArquivo = function(resource,file, type){
		var formData = new FormData();
		formData.append('file', file);

		var headers = userService.getHeader('POST_MULTIPART', resource+'/file/'+type ,null, file)
		return $http.post(config.baseURL + '/' +resource+ '/file/'+type, formData, {transformRequest: angular.identity, headers : headers});
	};

	this.getPdfById = function(id){
		var headers = userService.getHeader('GET', 'arquivos/'+id, null, null);
		headers.responseType = 'arraybuffer';
		console.log(headers);

		return $http.get(config.baseURL + '/arquivos/'+id, {headers: headers});
	};

});
