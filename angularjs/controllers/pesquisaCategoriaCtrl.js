app.controller("pesquisaCategoriaCtrl", function($scope, categorias) {

  $scope.categorias = categorias.data;

  console.log(categorias);
});
