/**
 * Created by Edem on 3/3/2017.
 */
angular.module('myApp', [])
    .controller('myCtrl', ['$scope', '$http', function($scope, $http) {
        $scope.myFunc = function(){
            var auth = window.btoa($scope.firstName + ':' + $scope.lastName), headers = {"Authorization": "Basic " + auth};
            $http.get("http://34.200.170.137/betterbae/login", {headers: headers}).then(function (response) {
                $scope.ctObject = response.data;
                var myUrl = window.location = "index2.html";
                $scope.my_variable = $scope.ctObject.first_name;
                $window.open(myUrl);
            }, function (response)
            {
                $scope.my_variable = "Invalid input";
            });
        }
    }]);

angular.module('myApp1', [])
    .controller('myCtrl1', ['$scope', '$http', function($scope, $http) {
        $scope.myFunc1 = function(){
            var ctObject = ({
                first_name: $scope.firstName,
                last_name: $scope.lastName,
                username: $scope.userName,
                password: $scope.passWord
            });
            $http.post('http://34.200.170.137/betterbae/doctors', ctObject)
                .then(function sucessCallback (ctObject) {
                        ctObject.id = data.insertId;
                        $scope.ctObject = ctObject;
                    }
                    , function errorCallback(error, status) {
                        $scope.my_variable1 = "Invalid input! Try again!";
                    });
        };

    }]);
