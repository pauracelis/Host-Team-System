angular.module('app').controller('ListController', function($scope, $http, $location) {
    $scope.title = "Worker List";

    $http.get('/api').success(function(data) {
        $scope.workers = data;
    }).error(function(status) {
        console.log('Error: ' + status);
    });

    $scope.sortKey = "-_id";
    $scope.sort = function(keyname) {
        $scope.sortKey = keyname;
        $scope.reverse = !$scope.reverse;
    };

    $scope.view = function(id) {
        $location.path('/view/' + id);
    };
});