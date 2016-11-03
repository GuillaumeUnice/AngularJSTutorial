var app = angular.module("myApp", []);

app.controller("mainController", function($scope){
	$scope.title = "mon Titre";
});

app.directive("ngToggle", function(){
  return {
    restrict: 'E',
    transclude: true,
    templateUrl: './templates/toggle.html',
    scope: {
    	title: '='
    },
    link: function($scope, element) {
    	$scope.isDisplayed = false;
    }
  }
});