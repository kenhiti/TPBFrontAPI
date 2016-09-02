var app = angular.module("myapp",["ngRoute","ngCookies","ngMessages","ngAnimate","ui.bootstrap"]);


//Controlador do Rodapé
app.controller('FooterController', function($scope){	
	$scope.$on('$includeContentLoaded', function(){
		console.log("footer");
		Layout.initFooter();
	});
});

//Controlador do Header
app.controller("HeaderController", function($rootScope, $scope, loginService){

	$scope.$on('$includeContentLoaded', function(){
		console.log("header");
		Layout.initHeader();
	});
});

//Controlador do Menu Lateral
app.controller("SidebarController", function($scope){
	$scope.$on("$includeContentLoaded", function(){
		console.log("sidebar");
		Layout.initSidebar();
	});
});



app.controller('AppController', function($rootScope, $scope, $location){	
	console.log("AppController");

	var settings = {
       	pageHeaderFixed: false,
		pageQuickSidebarOverContent: false, 
		pageSidebarClosedHideLogo: false, 
		pageContainerBgSolid: false,
		pageContentWrapper: false,
		pageContent: false,
		loginPage: true
    };

    $rootScope.settings = settings;

	$scope.$on('$viewContentLoad', function(){
		Metronic.initComponents();
	});
});

