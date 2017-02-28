var app = angular.module("myApp", ['ui.router']);

app.config([
    '$stateProvider',
    function($stateProvider) {
      $stateProvider
        .state('home',
          {
            url: '/',
            templateUrl: 'templates/home.html',
            controller: 'HomeController',
            
          })
        .state('home.nested',
          {
            url: 'home',
            template: '<p>I\'am a nested view</p>',
          })
          .state('about',
          {
            url: '/about',
            templateUrl: 'templates/about.html',
            controller: 'AboutController'
          });
  },]);

app.config(function($urlRouterProvider){
  $urlRouterProvider.otherwise('/');
})

app.controller("HomeController", function($scope, $interval){
   $scope.title = "Home Controller";
});


app.controller("AboutController", function($scope, $interval){
   $scope.title = "About Controller";
});
