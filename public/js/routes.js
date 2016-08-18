(function () {
    "use strict";
    angular.module("hthApp", ["ui.router"])
        .config(["$stateProvider", "$urlRouterProvider", "$locationProvider",
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
                .state("signUp", {
                    url: "/signUp",
                    templateUrl: "./templates/signUp.html"
                })
                .state("signIn", {
                    url: "/signIn",
                    templateUrl: "./templates/signIn.html"
                })
                .state("tools", {
                    url: "/tools",
                    templateUrl: "./templates/tools.html",
                    controller: "toolController"
                })
                .state("addTool", {
                    url: "/addtool",
                    templateUrl: "./templates/addTool.html",
                    controller: "toolController"
                })
                .state("editTool", {
                    url: "/edittool",
                    templateUrl: "./templates/editTool.html",
                    controller: "toolController"
                })
                .state("programming", {
                    url: "/programming",
                    templateUrl: "./templates/programming.html"
                })
                .state("admin", {
                    url: "/admin",
                    templateUrl: "./templates/admin.html"
                });
            $urlRouterProvider.otherwise("/");
            $locationProvider.html5Mode(true);
        }]);
}());