var app = angular.module("myApp", []);

app.directive("datepicker", function(){
  return {
    restrict: 'C',
    link: function ($scope, element, attrs) {
     $(element).pickadate();
    }
  }
});