(function () {
    "use strict";
    var hthApp = angular.module("hthApp", ['ui.router']);
    hthApp.config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
        function ($stateProvider, $urlRouterProvider, $locationProvider) {
            $stateProvider
                .state("home", {
                    url: "/",
                    templateUrl: "./templates/home.html"
                })
                .state("one", {
                    url: "/one",
                    templateUrl: "./templates/one.html"
                })
                .state("two", {
                    url: "/two",
                    templateUrl: "./templates/two.html"
                })
                .state("three", {
                    url: "/three",
                    templateUrl: "./templates/three.html"
                })
                .state("four", {
                    url: "/four",
                    templateUrl: "./templates/four.html"
                })
                .state("five", {
                    url: "/five",
                    templateUrl: "./templates/five.html"
                })
                .state("software", {
                    url: "/software",
                    templateUrl: "./templates/software.html"
                })
                .state("admin", {
                    url: "/admin",
                    templateUrl: "./templates/admin.html"
                });
            $urlRouterProvider.otherwise("/");
            $locationProvider.html5Mode(true);
        }]);
}());