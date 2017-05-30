(function() {
  angular
    .module('app')
    .config(['$stateProvider', '$urlRouterProvider', config])

  function config($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/home',
        controller: 'homeController',
        templateUrl: './views/home/homeTemplate.html'
      })
      .state('article', {
        url: '/article',
        controller: 'articleController',
        templateUrl: './views/article/articleTemplate.html'
      })

    $urlRouterProvider
      .otherwise('/home');
  }
})();