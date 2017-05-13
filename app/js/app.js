var app = angular.module('profile', ['ngRoute']);
app.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/profile',{
		templateUrl:'dist/partials/profile.html',
		controller:'profileCtrl'
	}).
	otherwise({
       redirectTo: '/profile'
    });
}]);

app.controller('profileCtrl', ['$scope', function($scope){
	$scope.title="In";
}]);