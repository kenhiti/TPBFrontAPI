'use strict';

app.factory('loginService', function($http, $location, config, $rootScope, userService, $window){
	return {
		login : function(loginData, scope){	

			var httpMethod = 'GET';
			var resource = "login/" + loginData.email;
			var headers = userService.getHeader(httpMethod, resource, loginData, null);
			var $promise = $http.get(config.baseURL+"/contas/email/"+loginData.email, {headers : headers});
			
			$promise.then(function(successCode){			
				
				console.log(successCode);
				if(successCode.status == 200){
					$rootScope.contaSelecionada = null;
					
					$rootScope.email = loginData.email;
					$rootScope.password = loginData.senha;
					$rootScope.idUsuarioLogado = successCode.data.idUsuario;
					$rootScope.nome = successCode.data.nome;
					
					$rootScope.authenticated = true;
					$location.path("/home");			
				}				
				
			},function(errorCode){
				console.log("Unauthorized");
				/*scope.tipoMensagem = "alert alert-danger TexAlCenter";
				scope.mensagem = "Email e/ou senha inválida.";
				scope.visualizaMensagem = true;
				
				$rootScope.authenticated = false;
				scope.loginData.senha = "";
				$location.path('/login');
				var element = $window.document.getElementById("loginWindowSenha");
		        if(element)
		          element.focus();*/
			});
		},

		logout :  function(){
			console.log("Entrou no logout loginService");
			$rootScope.authenticated = false;
			$rootScope.preAuth = false;
			$location.path('/login');			
		},

		isLogged : function(){
			if($rootScope.authenticated){
				return true;
			}
		}	
	}
	
});
