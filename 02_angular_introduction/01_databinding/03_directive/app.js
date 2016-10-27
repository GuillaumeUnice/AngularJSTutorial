var app = angular.module("myApp", []);

app.controller("myFirstController", function($scope){
  $scope.hello = "world";
  $scope.counter = 0;
  
  $scope.myFunc = function () {
    console.log('myFunc has been called');
    //$scope.$apply();
  }
  
  setInterval(function() {
    $scope.counter++;
    //  $scope.$apply();
    // $scope.$apply( function() { $scope.counter++; });
  }, 3000);
  
  /*
  $scope.$watch('hello', function() {
    alert('hello has been updated!');
  });


  $scope.$watch('counter', function() {
    alert('counter has been updated!');
  });
  */




  $scope.myTab = [0, 0, 0];
});
