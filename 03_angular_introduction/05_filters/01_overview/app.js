var app = angular.module("myApp", []);

app.controller("myFirstController", function($scope, $interval){
  $scope.fruits = ['apple', 'bannana', 'kiwi'];
});

