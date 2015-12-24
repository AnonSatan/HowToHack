(function () {
    "use strict";
    angular.module('hthApp')
        .directive('hthNav', function () {
            return {
                restrict: 'E',
                templateUrl: "./templates/hthNav.html"
            };
        });
}());