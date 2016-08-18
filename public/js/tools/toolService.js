(function () {
    "use strict";
    function toolService($http, $q) {

        function sendResponseData(response) {
            return response.data;
        }
        function sendGetToolsError() {
            return $q.reject('Error retrieving tool(s).)');
        }

        function getTools() {
            return $http({
                method: 'GET',
                url: '/api/tools'
            })
                .then(sendResponseData)
                .catch(sendGetToolsError);
        }
        return {
            getTools: getTools
//             getToolByID: getToolByID,
//             editTool: editTool,
//             addTool: addTool,
//             deleteTool: deleteTool
        };
    }
    angular.module('hthApp').factory('toolService', ['$http', '$q', toolService]);
}());