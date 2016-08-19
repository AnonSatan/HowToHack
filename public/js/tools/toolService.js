(function () {
    "use strict";
    function toolService($http, $q) {

        function getToolData(response) {
            return response.data;
        }

        function getToolError(response) {
            return $q.reject("Error retrieving tool. (HTTP status: " + response.status + ")");
        }

        function getToolsData(response) {
            return response.data;
        }

        function getToolsError(response) {
            return $q.reject("Error retrieving tools. (HTTP status: " + response.status + ")");
        }

        function editToolSuccess(response) {
            //return "Tool updated" + response.config.data.name;
            return response.data;
        }

        function editToolError(response) {
            return $q.reject("Error editing tool. (HTTP status: " + response.status + ")");
        }

        function addToolSuccess(response) {
            return "Tool Added " + response.status;
        }

        function addToolError(response) {
            return $q.reject("Error adding tool. (HTTP status: " + response.status + ")");
        }

        function deleteToolSuccess(response) {
            return ("Tool Deleted. " + response.status);
        }

        function deleteToolError(response) {
            return ("Error deleting tool. (HTTP status: " + response.status + ")");
        }

        function getTools() {
            return $http({
                method: "GET",
                url: "/api/tools/"
            })
                .then(getToolsData)
                .catch(getToolsError);
        }

        function getToolByID(id) {
            return $http({
                method: "GET",
                url: "/api/tools/" + id
            })
                .then(getToolData)
                .catch(getToolError);
        }

        function editTool(id) {
            return $http({
                method: "PUT",
                url: "/api/tools/" + id._id,
                data: id
            })
                .then(editToolSuccess)
                .catch(editToolError);
        }

        function deleteTool(id) {
            return $http({
                method: "DELETE",
                url: "/api/tools/" + id._id
            })
                .then(deleteToolSuccess)
                .catch(deleteToolError);
        }

        function addTool(newTool) {

            return $http({
                method: "POST",
                url: "/api/tools",
                data: newTool
            })
                .then(addToolSuccess)
                .catch(addToolError);

        }

        return {
            getTools: getTools,
            getToolByID: getToolByID,
            editTool: editTool,
            addTool: addTool,
            deleteTool: deleteTool
        };
    }

    angular.module("hthApp").factory("toolService", ["$http", "$q", toolService]);
}());