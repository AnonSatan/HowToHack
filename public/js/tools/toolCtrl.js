(function () {
    "use strict";
    function toolController($scope, $location, $log, toolService, $stateParams) {

        $scope.newTool = {};

        $scope.id = $stateParams._id;

        $scope.tools = toolService.getTools()
            .then(function (data) {
                $scope.tools = data;
            });

        $scope.tool = toolService.getToolByID()
            .then(function (data) {
                $scope.tool = data;
            });

        function addToolSuccess(message) {
            $log.info(message);
            $location.path('/tools');
        }

        function addToolError(errorMessage) {
            $log.error(errorMessage);
        }

        function updateToolSuccess(message) {
            $log.info(message);
            $location.path('/tools');
        }

        function updateToolError(errorMessage) {
            $log.error(errorMessage);
        }

        $scope.updateTool = function (tool) {
            toolService.addTool(tool)
                .then(updateToolSuccess)
                .catch(updateToolError);
        };
        $scope.addTool = function () {
            toolService.addTool($scope.newTool)
                .then(addToolSuccess)
                .catch(addToolError);
        };
    }

    angular.module("hthApp").controller("toolController", ["$scope", "$location", "$log", "toolService", "$stateParams", toolController]);
}());