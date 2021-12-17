cosplaybo = angular.module("cosplaybo", ['ngRoute']);

const debug = true

cosplaybo.config(function($routeProvider, $locationProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'views/home.html',
			controller: 'Home',
			reloadOnSearch: false,
		})
		.when('/verify', {
			templateUrl: 'views/verify.html',
			controller: 'Verify',
			reloadOnSearch: false,
		})
	;
});

cosplaybo.controller('Home', ['$scope', function($scope) {}]);

cosplaybo.controller('Verify', ['$scope', '$http', function($scope, $http) {
	console.log($http)
}]);

cosplaybo.controller('Main', ['$scope, $router', function($scope, $router) {
	console.log($router)
}]);

if (!debug)
	console.log = function () {}