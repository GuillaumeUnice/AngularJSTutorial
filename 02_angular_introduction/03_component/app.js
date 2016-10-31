var app = angular.module("myApp", []);

app.controller("myController", function($scope){ 
  $scope.name = 'World';
  $scope.isDestroyed = false;
});

app.component('myComponent', MyComponent());

  function MyComponent(){
    return {
      templateUrl: 'templates/myComponent.html',
      bindings: {
        name: '=' // <
      },
      controller: ['$scope', MyComponentController],
      controllerAs: 'myComponent',
    }
  }

  function MyComponentController($scope) {

    var vm = this;

    vm.msg = 'Hello';

    vm.$onInit = function() {
      console.log(vm.name);
      setTimeout(function() {
        console.log("apply");
        $scope.$apply();
      }, 3000)
    }

    vm.$onChanges = function(changeObj){
      if(changeObj.name){
        console.log(changeObj.name.previousValue);
      }
    }

    vm.$onDestroy = function() {
      console.log('onDestroy');      
    }

  }
