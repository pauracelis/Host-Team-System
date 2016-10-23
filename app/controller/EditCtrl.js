angular.module('app').controller('EditController', function($scope, $http, $location, $routeParams) {
    $scope.title = "Edit Worker";

    var id = $routeParams.id;
    $http.get('/api/' + id).success(function(data) {
        $scope.workers = data;
    }).error(function(status) {
        console.log('Error: ' + status);
    });

    $scope.cancel = function() {
        $location.path('/view/' + id);
    };

    $scope.update = function() {
        $http.put('/api/' + $scope.workers._id, $scope.workers).success(function(data) {
            $scope.workers = data;
            $location.path('/list');
            toastr.success('Contact updated successfully!');
        }).error(function(status) {
            toastr.warning('Wrongly entered. Please check!');
            console.log('Error: ' + status);
        });
    };

    $scope.noSpace = function() {
        $scope.workers.fname = $scope.workers.fname.split(' ').join('');
        $scope.workers.lname = $scope.workers.lname.split(' ').join('');
    };

});