(function () {
    "use strict";
    function toolController($scope, $location, $log, toolService, $stateParams) {

        $scope.newTool = {};

        var id = $stateParams.id;

        $scope.tools = toolService.getTools()
            .then(function (data) {
                $scope.tools = data;
            });

        $scope.tool = toolService.getToolByID(id)
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
            $location.path("/");
        }

        function updateToolError(errorMessage) {
            $log.error(errorMessage);
        }

        function removeToolSuccess(message) {
            $log.info(message);
            $location.path("/");

        }

        function removeToolError(errorMessage) {
            $log.error(errorMessage);
        }

        $scope.updateTool = function () {
            toolService.editTool($scope.tool)
                .then(updateToolSuccess)
                .catch(updateToolError);
        };
        $scope.addTool = function () {
            toolService.addTool($scope.newTool)
                .then(addToolSuccess)
                .catch(addToolError);
        };
        $scope.removeTool = function () {
            toolService.deleteTool($scope.tool)
                .then(removeToolSuccess)
                .catch(removeToolError);

        };
    }

    angular.module("hthApp").controller("toolController", ["$scope", "$location", "$log", "toolService", "$stateParams", toolController]);
}());