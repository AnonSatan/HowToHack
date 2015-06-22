(function () {
    "use strict";
    var hthApp = angular.module("hthApp", ['ui.router']);

    hthApp.config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
    function ($stateProvider, $urlRouterProvider, $locationProvider){
        $stateProvider
            .state("home", {url: "/", templateUrl: "./templates/home.html" });
        $urlRouterProvider.otherwise("/");
        $locationProvider.html5Mode(true);
    }])

}());