(function () {
    "use strict";
    function toolController($scope, toolService) {

        $scope.tools = toolService.getTools()
            .then(function (data) {
                $scope.tools = data;
            });
    }

    angular.module("hthApp").controller("toolController", toolController);
}());