app.factory('tplService', function($location,  $rootScope){
	return {
		getClass : function(){
			
			if($location.path() === '/login'){
				var settings = {
				pageHeaderView : false,
				pageFooterView : false,
				pageSidebarView : false,
		       	pageHeaderFixed: false,
				pageQuickSidebarOverContent: false, 
				pageSidebarClosedHideLogo: false, 
				pageContainerBgSolid: false,
				pageContentWrapper: false,
				pageContent: false,
				loginPage: true,
				sidebarDisabled : false
			    };

			    $rootScope.settings = settings;				
			}
			else{
				var settings = {
				pageHeaderView : true,
				pageFooterView : true,
				pageSidebarView : true,
		       	pageHeaderFixed: true,
				pageQuickSidebarOverContent: true, 
				pageSidebarClosedHideLogo: true, 
				pageContainerBgSolid: true,
				pageContentWrapper: true,
				pageContent: true,
				loginPage: false,
				sidebarDisabled : false
			    };

			    $rootScope.settings = settings;				
			}
		},

		setClass : function(pageHeaderView,
						    pageFooterView,
						    pageSidebarView,
						    pageHeaderFixed,
						    pageQuickSidebarOverContent, 
						    pageSidebarClosedHideLogo, 
							pageContainerBgSolid,
							pageContentWrapper,
							pageContent,
							loginPage,
							sidebarDisabled){
			var settings = {
				pageHeaderView : pageHeaderView,
				pageFooterView : pageFooterView,
				pageSidebarView : pageSidebarView,
		       	pageHeaderFixed: pageHeaderFixed,
				pageQuickSidebarOverContent: pageQuickSidebarOverContent, 
				pageSidebarClosedHideLogo: pageSidebarClosedHideLogo, 
				pageContainerBgSolid: pageContainerBgSolid,
				pageContentWrapper: pageContentWrapper,
				pageContent: pageContent,
				loginPage: loginPage,
				sidebarDisabled: sidebarDisabled
			};

			console.log("VAR SETTING = ");
			console.log(settings);
			
			$rootScope.settings = settings;


			console.log("SCOPE SETTING = ");
			console.log($rootScope.settings);
		}

	}
});