var app = angular.module("myApp", ['ngRoute']);

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'templates/home.html',
        controller: 'HomeController'
      }).
      when('/about', {
        templateUrl: 'templates/about.html',
        controller: 'AboutController'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);

app.controller("HomeController", function($scope, $interval){
   $scope.title = "Home Controller";
});


app.controller("AboutController", function($scope, $interval){
   $scope.title = "About Controller";
});
