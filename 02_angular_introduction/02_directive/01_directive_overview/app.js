var app = angular.module("myApp", []);

app.controller("myFirstController", function($scope){ 
  $scope.comments = [
    { author: 'Jean', content: 'J\'adore les directive' },
    { author: 'Jeanne', content: 'Je prefere les promesses au callback :D' }
  ]
});

/*
app.directive("ngComment", function(){
  return {
    template: '<p>Hello world</p>'
  }
});
*/

app.directive("ngComment", function(){
  return {
    restrict: 'E', // 'E', 'C' ==> restriction
    templateUrl: './templates/comment.html',
    scope: {
      comment: '=', /// ==> property comment equal attribut comment // '&', '@'
      anotherProperty: '=comment'
    } // ===> isolation

  }
});