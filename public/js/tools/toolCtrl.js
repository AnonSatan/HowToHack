(function () {
    "use strict";
    angular.module('hthApp').controller('ToolsController', ['$scope', '$http', function ($scope, $http) {

        $http({
            method: "GET",
            url: "/api/tools"
        }).then(function success(response) {
            $scope.tools = response.data;
            console.log(response);
        }, function error(response) {
            console.log(response.statusText);
        });
        //$http({
        //    method: "GET",
        //    url: "/api/tools/:id",
        //    params: "_id: id"
        //}).then(function success(response) {
        //    $scope.tools = response.data;
        //    console.log(response);
        //}, function error(response) {
        //    console.log(response.statusText);
        //});
        //$http({
        //    method: "POST",
        //    url: "/api/tools"
        //}).then(function success(response) {
        //    $scope.tools = response.data;
        //    console.log(response);
        //}, function error(response) {
        //    console.log(response.statusText);
        //});
        //$http({
        //    method: "PUT",
        //    url: "/api/tools/:id"
        //}).then(function success(response) {
        //    $scope.tools = response.data;
        //    console.log(response);
        //}, function error(response) {
        //    console.log(response.statusText);
        //});
        //$http({
        //    method: "DELETE",
        //    url: "/api/tools/:id"
        //}).then(function success(response) {
        //    $scope.tools = response.data;
        //    console.log(response);
        //}, function error(response) {
        //    console.log(response.statusText);
        //});
    }]);
}());