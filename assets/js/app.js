var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('');
    $locationProvider.html5Mode(true);
    $routeProvider
        .when('/about', {
            templateUrl: './views/about.html'
        })
        .when('/exchange', {
            templateUrl: './views/exchange.html'
        })
        .when('/contact', {
            templateUrl: './views/contact.html'
        })
        .otherwise({
            templateUrl: './views/main.html'
        });
});