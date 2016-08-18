(function () {
    "use strict";
    angular.module("hthApp")
        .directive("hthTabs", function () {
            return {
                restrict: "E",
                templateUrl: "./templates/hthTabs.html"
            };
        });
}());
