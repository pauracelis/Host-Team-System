angular.module('app').controller('AddController', function($scope, $http, $location) {
    $scope.title = "Add Worker";

    $scope.save = function() {
        $http.post('/api', $scope.workers).success(function(data) {
            $scope.workers = data;
            $location.path('/list');
            toastr.success('Worker added successfully!');
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