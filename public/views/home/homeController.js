(function() {
  angular
    .module('app')
    .controller('homeController', ['$scope', homeController]);

  function homeController($scope) {
    $scope.me = "Julie";
  }
})();