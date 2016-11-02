var app = angular.module("myApp", []);

app.controller("myFirstController", function($scope){ 
  $scope.comments = [
    { author: 'Jean', content: 'J\'adore les directive' },
    { author: 'Jeanne', content: 'Je prefere les promesses au callback :D' }
  ]
  $scope.destroy = false;

  $scope.transcludeScope = 'transcludeScope'; 
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
    }, // ===> isolation
    link: function ($scope, element, attrs) { // allow you to use the directive's context with : directives's scope, directives's element, directive's attribut
     
      element.on('$destroy', function () {
        console.log("destroy");
      });
    },
    transclude: true
  }
});