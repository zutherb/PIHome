var controllers = angular.module('pihome.controllers', []);
controllers.controller('IndexController', ['$scope', function($scope) {
    $scope.message = 'Hello From Controller';
}]);