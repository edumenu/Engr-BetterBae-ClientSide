var app = angular.module('myApp2', []);
app.controller('myCtrl2', ['$scope', '$http', function($scope, $http) {
    $http.get("http://34.200.170.137/betterbae/doctors/58b8702633ce3c44c143389f", {headers : {"Authorization": "Basic ZWR1bWVudTplZHVtZW51"} }).then(function (response) {
        $scope.ctObject = response.data;
        $scope.message = $scope.ctObject.first_name + ' ' + $scope.ctObject.last_name;
    }, function (response)
    {
        $scope.message = "Invalid input";
    });
}]);


app.controller('myCtrl4', ['$scope', '$http', function($scope, $http) {
    $http.get("http://34.200.170.137/betterbae/patients/58b8846923a898459df07b86", {headers : {"Authorization": "Basic cG9vcDpwb29w"} }).then(function (response) {
        $scope.ctObject1 = response.data;
        $scope.message1 = $scope.ctObject1.first_name + ' ' + $scope.ctObject1.last_name;
    }, function (response)
    {
        $scope.message1 = "Invalid input";
    });
}]);

app.controller('myCtrl3', ['$scope', '$http', function($scope, $http) {
    $http.get("http://34.200.170.137/betterbae/patients/58b8846923a898459df07b86/vitals?startDate=2017-03-20T20:24:40Z&endDate=2017-03-20T20:27:00Z",
        {headers : {"Authorization": "Basic cG9vcDpwb29w"} }).then(function (response) {
        $scope.ctObject = response.data;
        var i = 0;
        if($scope.ctObject[i] == 0)
        {
            $scope.records = $scope.ctObject;
            console.log($scope.records);
        }
        else
        {
            $scope.records = $scope.ctObject;
            console.log($scope.records);
        }
        // var serachObject = $location.search();
        // $location.search('')
        // $scope.bmp1 = $scope.ctObject.first_name + '   ' + $scope.ctObject.last_name;
    }, function (response)
    {
        $scope.message = "Invalid input";
    });
}]);