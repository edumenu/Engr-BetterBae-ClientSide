//Author: Edem Dumenu
//Creation: 03-17-2017
//Development Team: Edem Dumenu, Luke Clark, Sam Justice
//Description: This activity facilitates both the login page and the create new user page
//It receives the User's credentials and passes that information to the server for authentication

//Name: New  module
//Author: Edem Dumenu
//Date: 03-15-2017
//Purpose: This is creating a new module called app
//Arguments: "myApp" which is the name of the app
//Errors/Exceptions: None
//Modification history: This is the original version
var app = angular.module("myApp",[]);

//Name: New  module
//Author: Edem Dumenu
//Date: 03-17-2017
//Purpose: This is creating a new controller to retrieve the User's first and last name to be sent to the server
//for authentication
//Arguments: "myCtrl" which is the name of the controller. $scope which is the scope object. $http which is an angularjs service
//for reading data from server.
//Errors/Exceptions: None
//Modification history: This is the original version
    app.controller('myCtrl', ['$scope', '$http', function($scope, $http) {
        $scope.myFunc = function(){
            var auth = window.btoa($scope.firstName + ':' + $scope.lastName), headers = {"Authorization": "Basic " + auth};
            $http.get("http://34.200.170.137/betterbae/login", {headers: headers}).then(function (response) {
                $scope.ctObject = response.data;
                var x = $scope.ctObject._id.toString();
                window.localStorage['doctorID'] = angular.toJson(x);
                var myUrl = window.location = "root/patientListPage.html";
                $window.open(myUrl);
            }, function (response)
            {
                $scope.my_variable = "Invalid input";
            });
        }
    }]);// end of myCtrl

//Name: New  module
//Author: Edem Dumenu
//Date: 03-17-2017
//Purpose: This is creating a new controller to retrieve the User's first and last name, user name and password
// to be sent to the server to create a new user.
//Arguments: "myCtrl1" which is the name of the controller. $scope which is the scope object. $http which is an angularjs service
//for reading data from server.
//Errors/Exceptions: None
//Modification history: This is the original version
    app.controller('myCtrl1', ['$scope', '$http', function($scope, $http) {
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