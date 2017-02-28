var app = angular.module("myApp", []);

app.controller("myFirstController", function($scope, MyFactory, MyService){
  
  $scope.issues = [];
  $scope.searchIssue = function () {
  	MyFactory.getIssueInfo() // MyService.getIssueInfo()
  	.then(function (data) {
  		console.log(data);
  		$scope.issues = data;
  	} )
  	.catch( function (error) {
  		console.error(error);
  	});
  }
});

app.factory('MyFactory', function ($http, $q) {
  var factory = {
    getIssueInfo: function() {
		var deferred = $q.defer ();
		$http.get ( 'https://api.github.com/repos/treeptik/GJJonction/issues?state=open')
			.then ( function onSuccess ( response ) {
				deferred.resolve ( response.data );  
			} )
			.catch ( function onError ( reason ) {
				deferred.reject ( reason );
			} );
		return deferred.promise;
    }
  }
  return factory;
});

app.service('MyService', function ($http, $q) {
  this.getIssueInfo = function() {
		var deferred = $q.defer ();
		$http.get ( 'https://api.github.com/repos/treeptik/GJJonction/issues?state=open')
			.then ( function onSuccess ( response ) {
				deferred.resolve ( response.data );  
			} )
			.catch ( function onError ( reason ) {
				deferred.reject ( reason );
			} );
		return deferred.promise;
    }
});
