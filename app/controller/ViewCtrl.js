angular.module('app').controller('ViewController', function($scope, $http, $location, $routeParams) {
    $scope.title = "View Worker";

    var id = $routeParams.id;
    $http.get('/api/' + id).success(function(data) {
        $scope.workers = data;
    }).error(function(status) {
        console.log('Error: ' + status);
    });

    $scope.delete = function() {
        $http.delete('/api/' + id).success(function(data){
            $scope.workers = data;
            $location.path('/list');
            toastr.success('Worker deleted successfully!');
        }).error(function(status) {
            toastr.warning('Please try again after sometime!');
            console.log('Error: ' + status);
        });

        $('.modal-backdrop').hide();
    };

    $scope.edit = function() {
        $location.path('/edit/' + id);
    }
});