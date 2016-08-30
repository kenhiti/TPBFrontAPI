app.factory("userService", function($rootScope, $location){
	return{		

		getContext : function(){
			
			return context;
		},

		getHeader : function(method, resource, data, content){
			var header;
			var contentMD5;

			var email;
			var senha;

			if(data != null){
				email = data.email;
				senha = data.senha;
			}
			else{
				if($rootScope.email != undefined && $rootScope.password != undefined){
					email = $rootScope.email;
					senha = $rootScope.password;
				}
			}

			if(content != null){				
				contentMD5 = CryptoJS.MD5(angular.toJson(content));
			}

			if(method === 'GET'){
				var metodo = "GET\n";
				var conteudo = "\n";
				var tipoConteudo = "\n";
				var date = new Date().getTime();
				var caminho = "/" + resource;

				var sign = metodo + conteudo + tipoConteudo + date.toString()+ "\n" + caminho;					

				var hash = CryptoJS.HmacSHA256(sign, senha);
				var HMACHash = CryptoJS.enc.Base64.stringify(hash);
							
				var authorization = email+":"+HMACHash;
				console.log("Authorization Headers = ");
				console.log(authorization);
				
				header = {
					"Authorization": authorization,
					"x-date": date					
				};
			}

			if(method === 'PUT'){
				var metodo = "PUT\n";
				var conteudo = contentMD5 + "\n";
				var tipoConteudo = "application/json\n";
				var date = new Date().getTime();
				var caminho = "/" + resource;

				var sign = metodo + conteudo + tipoConteudo + date.toString()+ "\n" + caminho;			
				console.log(sign);

				var hash = CryptoJS.HmacSHA256(sign, senha);
				var HMACHash = CryptoJS.enc.Base64.stringify(hash);
							
				var authorization = email+":"+HMACHash;
				console.log("Authorization Headers = ");
				console.log(authorization);
				
				header = {
					"Authorization": authorization,
					"x-date": date	
				};
			}

			if(method === 'POST'){
				var metodo = "POST\n";
				var conteudo = contentMD5 + "\n";
				var tipoConteudo = "application/json\n";
				var date = new Date().getTime();
				var caminho = "/" + resource;

				var sign = metodo + conteudo + tipoConteudo + date.toString()+ "\n" + caminho;			
				console.log(sign);
				
				var hash = CryptoJS.HmacSHA256(sign, senha);
				var HMACHash = CryptoJS.enc.Base64.stringify(hash);
							
				var authorization = email+":"+HMACHash;
				console.log("Authorization Headers = ");
				console.log(authorization);
				
				header = {
					"Authorization": authorization,
					"x-date": date
				};
			}

			if(method === 'POST_MULTIPART'){
				var metodo = "POST\n";
				var conteudo = contentMD5 + "\n";
				var tipoConteudo = "application/json\n";
				var date = new Date().getTime();
				var caminho = "/" + resource;				

				var sign = metodo + conteudo + tipoConteudo + date.toString()+ "\n" + caminho;			
				console.log(sign);
				
				var hash = CryptoJS.HmacSHA256(sign, senha);
				var HMACHash = CryptoJS.enc.Base64.stringify(hash);
							
				var authorization = email+":"+HMACHash;
				console.log("Authorization Headers = ");
				console.log(authorization);
				
				header = {
					"Authorization": authorization,
					"x-date": date
				};
			}

			if(method === 'DELETE'){
				var metodo = "DELETE\n";
				var conteudo = contentMD5 + "\n";
				var tipoConteudo = "application/json\n";
				var date = new Date().getTime();
				var caminho = "/" + resource;

				var sign = metodo + conteudo + tipoConteudo + date.toString()+ "\n" + caminho;			

				var hash = CryptoJS.HmacSHA256(sign, senha);
				var HMACHash = CryptoJS.enc.Base64.stringify(hash);
							
				var authorization = email+":"+HMACHash;
				console.log("Authorization Headers = ");
				console.log(authorization);
				
				header = {
					"Authorization": authorization,
					"x-date": date	
				};
			}
			return header;
		}

	}
});