app.controller("pesquisaPerfilCtrl", function($scope, perfis) {

  $scope.perfis = perfis.data;

  console.log(perfis);
});
