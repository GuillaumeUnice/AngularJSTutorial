var app = angular.module("myApp", []);

app.controller("myFirstController", function($scope, $interval){

  $scope.counter = 0;
  
  $interval(function() {
    $scope.counter++;
  }, 1000);
});

app.filter('minutes', function() {
  return function(value) {
    return Math.floor(value / 60) + ' minutes';
  }
});
