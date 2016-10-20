/*app.controller("visualizarLivroCtrl", function($scope, $routeParams,$sce, livroAPI, fileAPI){	
	
	$scope.message = "";
	$scope.type = "";
	$scope.render = false;
	$scope.renderPdf = false;

	$scope.UriView = "";

	var buscarEdicao = function(){

		var $promisse = fileAPI.getPdfById($routeParams.id);

		$promisse.then(function(success){
			console.log("SUCCESS : ");
			console.log(success);

			var stream = success.data;
			var file = new Blob([stream], {type: 'application/pdf'});			
			var fileURL = URL.createObjectURL(file);
			/*var fileURL = $sce.trustAsResourceUrl(URL.createObjectURL(file));*/

			//$scope.UriView = $sce.trustAsResourceUrl("/thePirateBook/lib/web/viewer.html?file="+fileURL);
			/*$scope.UriView = "/thePirateBook/lib/web/viewer.html?file="+$sce.trustAsResourceUrl(fileURL);*/
			/*$scope.UriView = "/thePirateBook/lib/web/viewer.html?file="+encodeURIComponent(fileURL);*/
			/*$scope.UriView = "/thePirateBook/lib/web/viewer.html?file="+ fileURL;*/
			
			//$scope.UriView =  fileURL;
			//console.log($scope.UriView);
			//$scope.renderPdf = true;
			//$scope.renderPDF();

	/*	}, function(error){
			$scope.message = "Falha ao processar sua solicitação.";
			$scope.type = "alert alert-danger TexAlCenter";
			$scope.render = true;
		});
	};

	if($routeParams.id != undefined){
		buscarEdicao();		
	}
	else{
		$scope.message = "Falha ao processar sua solicitação.";
		$scope.type = "alert alert-danger TexAlCenter";
		$scope.render = true;
	};*/

	/*$scope.renderPDF = function() {		

	    var scale= 1.5;  //"zoom" factor for the PDF

	    function renderPage(page) {
	        
	        var viewport = page.getViewport(scale);
	        
	        var canvas = document.getElementById('pdf-holder');
	        var ctx = canvas.getContext('2d');

	        canvas.height = viewport.height;
	        canvas.width = viewport.width;

	        var renderContext = {
	            canvasContext: ctx,
	            viewport: viewport
	        };	        

	        page.render(renderContext);
	    }

	    function renderPages(pdfDoc) {
	        for(var num = 1; num <= pdfDoc.numPages; num++)
	            pdfDoc.getPage(num).then(renderPage);
	    }
	    
	    PDFJS.disableWorker = false;
	    
	    PDFJS.workerSrc = 'lib/build/pdf.worker.js';	   
	    
	    
	    PDFJS.getDocument($scope.livro.pdf.base64).then(renderPages);
	}
});*/