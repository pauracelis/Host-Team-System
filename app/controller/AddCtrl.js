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

    // $scope.getVal = function(){
    //     $scope.workers.dgroup = $scope.dgroup.getElementsByTagName('')
    // }
    // $scope.noSpace = function() {
    //     $scope.workers.fname = $scope.workers.fname.split(' ').join('');
    //     $scope.workers.lname = $scope.workers.lname.split(' ').join('');
    //     $scope.workers.nickname = $scope.workers.nickname.split(' ').join('');
    //     $scope.workers.gender = $scope.workers.gender.split(' ').join('');
    //     $scope.workers.cstatus = $scope.workers.cstatus.split(' ').join('');
    //     $scope.workers.cellphone = $scope.workers.cellphone.split(' ').join('');
    //     $scope.workers.telnumber = $scope.workers.telnumber.split(' ').join('');
    //     $scope.workers.bday = $scope.workers.bday.split(' ').join('');
    //     $scope.workers.age = $scope.workers.age.split(' ').join('');
    //     $scope.workers.emailadd = $scope.workers.emailadd.split(' ').join('');
    //     $scope.workers.homeaddress = $scope.workers.homeaddress.split(' ').join('');
    //     $scope.workers.profession = $scope.workers.profession.split(' ').join('');
    //     $scope.workers.company = $scope.workers.company.split(' ').join('');
    //     $scope.workers.talent = $scope.workers.talent.split(' ').join('');
    //     $scope.workers.medical = $scope.workers.medical.split(' ').join('');
    //     $scope.workers.elname = $scope.workers.elname.split(' ').join('');
    //     $scope.workers.efname = $scope.workers.efname.split(' ').join('');
    //     $scope.workers.relationship = $scope.workers.relationship.split(' ').join('');
    //     $scope.workers.econtact = $scope.workers.econtact.split(' ').join('');
    //     $scope.workers.dgroup = $scope.workers.dgroup.split(' ').join('');
    //     $scope.workers.dlname = $scope.workers.dlname.split(' ').join('');
    //     $scope.workers.dfname = $scope.workers.dfname.split(' ').join('');
    //     $scope.workers.dminitial = $scope.workers.dminitial.split(' ').join('');
    //     $scope.workers.dcontact = $scope.workers.dcontact.split(' ').join('');
    //     $scope.workers.dtype = $scope.workers.dtype.split(' ').join('');
    //     $scope.workers.dschedday = $scope.workers.dschedday.split(' ').join('');
    //     $scope.workers.dtime = $scope.workers.dtime.split(' ').join('');
    //     $scope.workers.dvenue = $scope.workers.dvenue.split(' ').join('');
    //     $scope.workers.apastor = $scope.workers.apastor.split(' ').join('');
    //     $scope.workers.dhandletype = $scope.workers.dhandletype.split(' ').join('');
    //     $scope.workers.dhandleday = $scope.workers.dhandleday.split(' ').join('');
    //     $scope.workers.dhandletime = $scope.workers.dhandletime.split(' ').join('');
    //     $scope.workers.dhandlevenue = $scope.workers.dhandlevenue.split(' ').join('');
    //     $scope.workers.oministry = $scope.workers.oministry.split(' ').join('');
    //     $scope.workers.pastministry = $scope.workers.pastministry.split(' ').join('');
    //     $scope.workers.trainingdate = $scope.workers.trainingdate.split(' ').join('');
    //     $scope.workers.firstduty = $scope.workers.firstduty.split(' ').join('');
    //     $scope.workers.clustername = $scope.workers.clustername.split(' ').join('');
    //     $scope.workers.segment = $scope.workers.segment.split(' ').join('');
    //     $scope.workers.segmentleader = $scope.workers.segmentleader.split(' ').join('');
    //     $scope.workers.time = $scope.workers.time.split(' ').join('');
    //     $scope.workers.htposition = $scope.workers.htposition.split(' ').join('');
    // };

});