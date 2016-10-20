app.controller("pesquisaGeneroCtrl", function($scope, generos) {

  $scope.generos = generos.data;

  console.log(generos);
});
