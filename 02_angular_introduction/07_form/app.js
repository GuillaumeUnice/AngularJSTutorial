var app = angular.module("myApp", []);



app.component('loginComponent', LoginComponent());

  function LoginComponent(){
    return {
      templateUrl: 'templates/loginComponent.html',
      bindings: {
      },
      controller: [LoginComponentController],
      controllerAs: 'login',
    }
  }

  function LoginComponentController() {

    var vm = this;

    vm.username = '';
    vm.password = '';

    vm.login = login;

    function login (username, password) {
      console.log("login");
      console.log(username + ' ' + password);
    }

  }
