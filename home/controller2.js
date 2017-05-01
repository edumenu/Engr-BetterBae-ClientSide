//Author: Edem Dumenu
//Creation: 03-20-2017
//Development Team: Edem Dumenu, Luke Clark, Sam Justice
//Description: This activity facilitates the doctor's profile page, the patient list and the patient statistics page
//It receives the User's credentials and passes that information to the other controllers to receive information
//regarding patients associated with the doctor

//Name: New  module
//Author: Edem Dumenu
//Date: 03-20-2017
//Purpose: This is creating a new module called app
//Arguments: "myApp" which is the name of the app
//Errors/Exceptions: None
//Modification history: This is the original version
var app = angular.module('myApp2', []);

//Name: New  module
//Author: Edem Dumenu
//Date: 03-21-2017
//Purpose: This is creating a new controller to retrieve the name of the doctor who's signed in
//Arguments: "doctorName" which is the name of the controller. $scope which is the scope object. $http which is an angularjs service
//for reading data from server.
//Errors/Exceptions: None
//Modification history: This is the original version
app.controller('doctorName', ['$scope', '$http', function($scope, $http) {

    var doctorObject = JSON.parse(localStorage.getItem("doctorID"));

    $http.get("http://34.200.170.137/betterbae/doctors/" + doctorObject,
        {headers : {"Authorization": "Basic ZWR1bWVudTplZHVtZW51"} })
        .then(function (response) {
        $scope.ctObject = response.data;
        $scope.message = $scope.ctObject.first_name + ' ' + $scope.ctObject.last_name;
    }, function (response)
    {
        $scope.message = "Invalid input";
    });
}]);//end of doctorName

//Name: New  module
//Author: Edem Dumenu
//Date: 03-20-2017
//Purpose: This is creating a new controller to retrieve the patient list associated with the doctor
//Arguments: "patientList" which is the name of the controller. $scope which is the scope object. $http which is an angularjs service
//for reading data from server. $sce which provides strict contextual escaping services to angularjs
//Errors/Exceptions: None
//Modification history: This is the original version
app.controller('patientlist', ['$scope', '$http','$sce', function($scope, $http,$sce) {

    var doctorObject = JSON.parse(localStorage.getItem("doctorID"));

    $http.get("http://34.200.170.137/betterbae/doctors/"+ doctorObject +"/patients",
        {headers : {"Authorization": "Basic cG9vcDpwb29w"} })
        .then(function (response) {
        $scope.messages = response.data;
    }, function (response)
    {
        $scope.messages = "Invalid input";
    });

//Name: New function accessHourPage
//Author: Edem Dumenu
//Date: 03-20-2017
//Purpose: This function is assigning the iframe to the "1hrPage.html" page
//Arguments: None.
//Errors/Exceptions: None
//Modification history: This is the original version
    $scope.accessHourPage = function(){
            $scope.detailFrame = $sce.trustAsResourceUrl("1hrPage.html");
    };//end of accessHourPage

//Name: New function accessTwentyFourPage
//Author: Edem Dumenu
//Date: 03-20-2017
//Purpose: This function is assigning the iframe to the "24hrPage.html" page
//Arguments: None
//Errors/Exceptions: None
//Modification history: This is the original version
    $scope.accessTwentyFourPage = function(){
        $scope.detailFrame = $sce.trustAsResourceUrl("24hrPage.html");
    };//end of removeID

//Name: New function removeID
//Author: Edem Dumenu
//Date: 03-20-2017
//Purpose: This function is assigning the iframe to the "24hrPage.html" page
//Arguments: "variable" which contains the patient's ID number when a patient is selected
//Errors/Exceptions: None
//Modification history: This is the original version
    $scope.removeID = function(variable){
        window.localStorage['patientID'] = angular.toJson(variable);
    };//end of removeId

//Name: New function timeRange
//Author: Edem Dumenu
//Date: 03-20-2017
//Purpose: This function is assigning the iframe to the "timeRange.html" page
//Arguments: None
//Errors/Exceptions: None
//Modification history: This is the original version
    $scope.timeRange = function(){
        $scope.detailFrame = $sce.trustAsResourceUrl("timeRange.html");
    };//end of timeRange

}]);//end of patientList

//Name: New controller
//Author: Edem Dumenu
//Date: 03-22-2017
//Purpose: This is creating a new controller to retrieve the patient name to be displayed on the statistics page
//Arguments: "patientName" which is the name of the controller. $scope which is the scope object. $http which is an angularjs service
//for reading data from server.
//Errors/Exceptions: None
//Modification history: This is the original version
app.controller('patientName', ['$scope', '$http', function($scope, $http) {
    var patientObject = JSON.parse(localStorage.getItem("patientID"));
    $http.get("http://34.200.170.137/betterbae/patients/"+ patientObject,
        {headers : {"Authorization": "Basic ZWR1bWVudTplZHVtZW51"} })
        .then(function (response) {
        $scope.ctObject = response.data;
        $scope.message = $scope.ctObject.first_name + ' ' + $scope.ctObject.last_name;
    }, function (response)
    {
        $scope.message = "Invalid input";
    });
}]);//end of patientName


//Name: New controller
//Author: Edem Dumenu
//Date: 03-22-2017
//Purpose: This is creating a new controller to retrieve the inputs time for start day, end day, start time
//end time
//Arguments: "Scoper" which is the name of the controller. $scope which is the scope object.
//Errors/Exceptions: None
//Modification history:
//                       1st version: Retrieves month, day, and year
//                       2nd version: Retrieves only day
app.controller('Scoper', ['$scope', function($scope) {
    $scope.myFunc1 = function() {
    var startDate = ({
        day: $scope.Day
        });

//Name: New local storage
//Author: Edem Dumenu
//Date: 04-10-2017
//Purpose: This stores the input day in a start date object
//Arguments: startDate which is the start date object stored in "startDate".
//Errors/Exceptions: None
//Modification history: This is the original version
 localStorage.setItem("startDate", JSON.stringify(startDate));

    var startTime = ({
         hour: $scope.Hour,
         minute: $scope.Minute
         });

//Name: New local storage
//Author: Edem Dumenu
//Date: 04-10-2017
//Purpose: This stores the input hour and minute in a "startTime" object
//Arguments: startTime which is the start time object stored in "startTime".
//Errors/Exceptions: None
//Modification history: This is the original version
 localStorage.setItem("startTime", JSON.stringify(startTime));

    var endDate = ({
        day: $scope.dDay
        });

 //Name: New local storage
//Author: Edem Dumenu
//Date: 03-22-2017
//Purpose: This stores the input hour and minute in a "endDate" object
//Arguments: endDate which is the end date object stored in "endDate".
//Errors/Exceptions: None
//Modification history: This is the original version
 localStorage.setItem("endDate", JSON.stringify(endDate));

     var endTime = ({
        hour: $scope.hHour,
        minute: $scope.mMinute
        });

//Name: New local storage
//Author: Edem Dumenu
//Date: 03-22-2017
//Purpose: This stores the input hHour and mMinute in a "endTime" object
//Arguments: endTime which is the end time object stored in "endTime".
//Errors/Exceptions: None
//Modification history: This is the original version
 localStorage.setItem("endTime", JSON.stringify(endTime));

    }
}]);//end of Scoper

//Name: New controller
//Author: Edem Dumenu
//Date: 04-12-2017
//Purpose: This is creating a new controller to retrieve the time range input by the doctor
//Arguments: "timeRangeCtrl" which is the name of the controller. $scope which is the scope object. $http which is an angularjs service
//for reading data from server.
//Errors/Exceptions: None
//Modification history: This is the original version
app.controller('timeRangeCtrl', ['$scope', '$http', function($scope, $http) {

        //Obtaining the start date, end date, start time, and end time
        var startDateObject = JSON.parse(localStorage.getItem("startDate"));
        var startTimeObject = JSON.parse(localStorage.getItem("startTime"));
        var endDateObject = JSON.parse(localStorage.getItem("endDate"));
        var endTimeObject = JSON.parse(localStorage.getItem("endTime"));

        //Obtaining the current year and month
        var todayYear = new Date().getFullYear();
        var todayMonth = new Date().getMonth() + 1;

        //Using the pad function to place leading zeros in front of single digit day and month values
        var todayYearN = pad(todayYear, 2);
        var todayMonthN = pad(todayMonth, 2);
        var startDayN = pad(startDateObject.day, 2);
        var endDayN = pad(endDateObject.day, 2);
        var startHoursN = pad(startTimeObject.hour + (new Date().getTimezoneOffset() / 60), 2);
        var endHours2N = pad(endTimeObject.hour + (new Date().getTimezoneOffset() / 60), 2);
        var startMinutesN = pad(startTimeObject.minute, 2);
        var endMinutesN = pad(endTimeObject.minute, 2);

        //Obtaining time range form the monogodb database using a get request
        $http.get("http://34.200.170.137/betterbae/patients/58b8846923a898459df07b86/vitals?startDate=" + todayYearN + "-" + todayMonthN + "-" + startDayN + "T" +
            startHoursN + ":" + startMinutesN + ":00Z&endDate=" + todayYearN + "-" + todayMonthN + "-" + endDayN + "T" + endHours2N + ":" + endMinutesN + ":00Z",
            {headers: {"Authorization": "Basic cG9vcDpwb29w"}})
            .then(function (response) {
                $scope.dobject = response.data;
                $scope.records = $scope.dobject;
            }
            , function errorCallback(error, status) {
                $scope.records = "Invalid input! Try again!";
            });
 }]);//end of timeRangeCtrl

//Name: New controller
//Author: Edem Dumenu
//Date: 04-12-2017
//Purpose: This is creating a new controller to retrieve messages from bpm's that are out of range
//Arguments: "timeRangeMessage" which is the name of the controller. $scope which is the scope object. $http which is an angularjs service
//for reading data from server.
//Errors/Exceptions: None
//Modification history: This is the original version
 app.controller('timeRangeMessage', ['$scope', '$http', function($scope, $http) {

     //Obtaining the start date, end date, start time, and end time
     var startDateObject = JSON.parse(localStorage.getItem("startDate"));
     var startTimeObject = JSON.parse(localStorage.getItem("startTime"));
     var endDateObject = JSON.parse(localStorage.getItem("endDate"));
     var endTimeObject = JSON.parse(localStorage.getItem("endTime"));

     //Obtaining the current year and month
     var todayYear = new Date().getFullYear();
     var todayMonth = new Date().getMonth() + 1;

     //Using the pad function to place leading zeros in front of single digit day and month values
     var todayYearN = pad(todayYear,2);
     var todayMonthN = pad(todayMonth,2);
     var startDayN = pad(startDateObject.day,2);
     var endDayN = pad(endDateObject.day,2);
     var startHoursN = pad(startTimeObject.hour + (new Date().getTimezoneOffset() / 60),2);
     var endHours2N = pad(endTimeObject.hour + (new Date().getTimezoneOffset() / 60),2);
     var startMinutesN = pad(startTimeObject.minute,2);
     var endMinutesN = pad(endTimeObject.minute,2);


     //Obtaining messages that display bpm's which are out of range from the monogodb database using a get request
     $http.get("http://34.200.170.137/betterbae/patients/58b8846923a898459df07b86/vitals/messages?startDate="+ todayYearN +"-"+ todayMonthN +"-"+ startDayN +"T"+
     startHoursN +":"+ startMinutesN +":00Z&endDate="+ todayYearN +"-"+ todayMonthN +"-"+ endDayN +"T"+ endHours2N +":"+ endMinutesN +":00Z",
     {headers : {"Authorization": "Basic cG9vcDpwb29w"} })
         .then(function (response) {
     $scope.dobject = response.data;
     $scope.records1 = $scope.dobject;
     }
     , function errorCallback(error, status) {
     $scope.records1 = "Invalid input! Try again!";
     });
 }]);//end of timeRangeMessage

//Name: New controller
//Author: Edem Dumenu
//Date: 04-13-2017
//Purpose: This is creating a new controller to retrieve a patient's data from the current time to an hour ago
//Arguments: "oneHour" which is the name of the controller. $scope which is the scope object. $http which is an angularjs service
//for reading data from server.
//Errors/Exceptions: None
//Modification history: This is the original version
app.controller('oneHour', ['$scope', '$http', function($scope, $http) {


    //Obtaining the current year, month, date, and time
    var todayYear = new Date().getFullYear();
    var todayMonth = new Date().getMonth() + 1;
    var todayDay = new Date().getDate();
    var todayHours = new Date().getHours() + (new Date().getTimezoneOffset() / 60);
    var todayHours2 =  new Date().getHours() + (new Date().getTimezoneOffset() / 60) - 1;
    var todayMinutes = new Date().getMinutes();

    //Obtaining the the selected patient's ID number
    var patientObject = JSON.parse(localStorage.getItem("patientID"));


    if(todayHours > 23)
    {
        todayHours = todayHours % 24;
    }

    //Using the pad function to place leading zeros in front of single digit values
    var todayMonthN = pad(todayMonth,2);
    var todayDayN = pad(todayDay,2);
    var todayHoursN = pad(todayHours,2);
    var todayHours2N = pad(todayHours2,2);
    var todayMinutesN = pad(todayMinutes,2);

    //Obtaining bpm's from the last hour of the selected patient using a get request
    $http.get("http://34.200.170.137/betterbae/patients/"+ patientObject +"/vitals?startDate="+ todayYear +"-"+ todayMonthN +"-"+ todayDayN +"T"+ todayHours2N +":"+ todayMinutesN +
        ":00Z&endDate="+ todayYear +"-"+ todayMonthN +"-"+ todayDayN +"T"+ todayHoursN +":"+ todayMinutesN +":00Z",
        {headers : {"Authorization": "Basic cG9vcDpwb29w"} })
        .then(function (response) {
            $scope.dobject = response.data;
            $scope.records = $scope.dobject;
        }
        , function errorCallback() {
            $scope.records = "Invalid input! Try again!";
        });

}]);//end of oneHour

//Name: New controller
//Author: Edem Dumenu
//Date: 04-15-2017
//Purpose: This is creating a new controller to retrieve messages from bpm's in the last hour that are out of range
//Arguments: "oneHourMessage" which is the name of the controller. $scope which is the scope object. $http which is an angularjs service
//for reading data from server.
//Errors/Exceptions: None
//Modification history: This is the original version
app.controller('oneHourMessage', ['$scope', '$http', function($scope, $http) {


    $scope.yesterdayDate = new Date();

    //Obtaining the current year, month, date, and time
    var todayYear = new Date().getFullYear();
    var todayMonth = new Date().getMonth() + 1;
    var todayDay = new Date().getDate();
    var todayHours = new Date().getHours() + (new Date().getTimezoneOffset() / 60);
    var todayHours2 =  new Date().getHours() + (new Date().getTimezoneOffset() / 60) - 1;
    var todayMinutes = new Date().getMinutes();

    //Obtaining the the selected patient's ID number
    var patientObject = JSON.parse(localStorage.getItem("patientID"));

    if(todayHours > 23)
    {
        todayHours = todayHours % 24;
    }

    //Using the pad function to place leading zeros in front of single digit values
    var todayMonthN = pad(todayMonth,2);
    var todayDayN = pad(todayDay,2);
    var todayHoursN = pad(todayHours,2);
    var todayHours2N = pad(todayHours2,2);
    var todayMinutesN = pad(todayMinutes,2);

    //Obtaining bpm messages from the last hour of the selected patient using a get request
    $http.get("http://34.200.170.137/betterbae/patients/"+ patientObject +"/vitals/messages?startDate="+ todayYear +"-"+ todayMonthN +"-"+ todayDayN +"T"+ todayHours2N +":"+ todayMinutesN +
        ":00Z&endDate="+ todayYear +"-"+ todayMonthN +"-"+ todayDayN +"T"+ todayHoursN +":"+ todayMinutesN +":00Z",
        {headers : {"Authorization": "Basic cG9vcDpwb29w"} })
        .then(function (response) {
            $scope.dobject = response.data;
            $scope.records1 = $scope.dobject;
        }
        , function errorCallback() {
            $scope.records1 = "Invalid input! Try again!";
        });

}]);//end of oneHourMessage

//Name: New controller
//Author: Edem Dumenu
//Date: 04-18-2017
//Purpose: This is creating a new controller to retrieve bpm's in the last twenty-four hours.
//Arguments: "twentyFour" which is the name of the controller. $scope which is the scope object. $http which is an angularjs service
//for reading data from server.
//Errors/Exceptions: None
//Modification history: This is the original version
app.controller('twentyFour', ['$scope', '$http', function($scope, $http) {

      //This is initializing the date from twenty-four hours ago
       $scope.yesterdayDate = new Date();
       $scope.yesterdayDate.setDate($scope.yesterdayDate.getDate() - 1);

       //Obtaining the current year, month, date, and time
       var todayYear = new Date().getFullYear();
       var todayMonth = new Date().getMonth() + 1;
       var todayDay = new Date().getDate();
       var todayHours = new Date().getHours() + (new Date().getTimezoneOffset() / 60);
       var todayMinutes = new Date().getMinutes();
       var yesterdayYear = $scope.yesterdayDate.getFullYear();
       var yesterdayMonth = $scope.yesterdayDate.getMonth() + 1;
       var yesterdayDay = $scope.yesterdayDate.getDate();
       var yesterdayHours = $scope.yesterdayDate.getHours() + (new Date().getTimezoneOffset() / 60);
       var yesterdayMinutes = $scope.yesterdayDate.getMinutes();

    //Obtaining the the selected patient's ID number
       var patientObject = JSON.parse(localStorage.getItem("patientID"));


    if(todayHours && yesterdayHours > 23)
    {
        todayHours = todayHours % 24;
        yesterdayHours = yesterdayHours % 24;
    }

    //Using the pad function to place leading zeros in front of single digit values
    var yesterdayMonthN = pad(yesterdayMonth,2);
    var todayMonthN = pad(todayMonth,2);
    var yesterdayDayN = pad(yesterdayDay,2);
    var todayDayN = pad(todayDay,2);
    var yesterdayHoursN = pad(yesterdayHours,2);
    var todayHoursN = pad(todayHours,2);
    var yesterdayMinutesN = pad(yesterdayMinutes,2);
    var todayMinutesN = pad(todayMinutes,2);

    //Obtaining bpm from the last twenty-fours hours of the selected patient using a get request
        $http.get("http://34.200.170.137/betterbae/patients/"+ patientObject +"/vitals?startDate="+ yesterdayYear +"-"+ yesterdayMonthN +"-"+ yesterdayDayN +"T"+ yesterdayHoursN +":"+ yesterdayMinutesN +
            ":00Z&endDate="+ todayYear +"-"+ todayMonthN +"-"+ todayDayN +"T"+ todayHoursN +":"+ todayMinutesN +":00Z",
            {headers : {"Authorization": "Basic cG9vcDpwb29w"} })
            .then(function (response) {
                $scope.dobject = response.data;
                $scope.records = $scope.dobject;
                }
                , function errorCallback() {
                $scope.records = "Invalid input! Try again!";
            });
}]);//end of twentyFour

//Name: New controller
//Author: Edem Dumenu
//Date: 04-18-2017
//Purpose: This is creating a new controller to retrieve bpm's messages that are out of range in the last twenty-four hours.
//Arguments: "twentyFourMessage" which is the name of the controller. $scope which is the scope object. $http which is an angularjs service
//for reading data from server.
//Errors/Exceptions: None
//Modification history: This is the original version
app.controller('twentyFourMessage', ['$scope', '$http', function($scope, $http) {

    //This is initializing the date from twenty-four hours ago
         $scope.yesterdayDate = new Date();
         $scope.yesterdayDate.setDate($scope.yesterdayDate.getDate() - 1);

    //Obtaining the current year, month, date, and time
         var todayYear = new Date().getFullYear();
         var todayMonth = new Date().getMonth() + 1;
         var todayDay = new Date().getDate();
         var todayHours = new Date().getHours() + (new Date().getTimezoneOffset() / 60);
         var todayMinutes = new Date().getMinutes();
         var yesterdayYear = $scope.yesterdayDate.getFullYear();
         var yesterdayMonth = $scope.yesterdayDate.getMonth() + 1;
         var yesterdayDay = $scope.yesterdayDate.getDate();
         var yesterdayHours = $scope.yesterdayDate.getHours() + (new Date().getTimezoneOffset() / 60);
         var yesterdayMinutes = $scope.yesterdayDate.getMinutes();

    //Obtaining the the selected patient's ID number
         var patientObject = JSON.parse(localStorage.getItem("patientID"));


    if(todayHours && yesterdayHours > 23)
    {
        todayHours = todayHours % 24;
        yesterdayHours = yesterdayHours % 24;


    }

    //Using the pad function to place leading zeros in front of single digit values
    var yesterdayMonthN = pad(yesterdayMonth,2);
    var todayMonthN = pad(todayMonth,2);
    var yesterdayDayN = pad(yesterdayDay,2);
    var todayDayN = pad(todayDay,2);
    var yesterdayHoursN = pad(yesterdayHours,2);
    var todayHoursN = pad(todayHours,2);
    var yesterdayMinutesN = pad(yesterdayMinutes,2);
    var todayMinutesN = pad(todayMinutes,2);

    //Obtaining bpm messages from the last twenty-fours hours of the selected patient using a get request
    $http.get("http://34.200.170.137/betterbae/patients/"+ patientObject +"/vitals/messages?startDate="+ yesterdayYear +"-"+ yesterdayMonthN +"-"+ yesterdayDayN +"T"+ yesterdayHoursN +":"+ yesterdayMinutesN +
        ":00Z&endDate="+ todayYear +"-"+ todayMonthN +"-"+ todayDayN +"T"+ todayHoursN +":"+ todayMinutesN +":00Z",
        {headers : {"Authorization": "Basic cG9vcDpwb29w"} })
        .then(function (response) {
            $scope.dobject = response.data;
            $scope.records1 = $scope.dobject;
        }
        , function errorCallback() {
            $scope.records1 = "Invalid input! Try again!";
        });

 }]);//end of twentyFourMessage

//Name: New  directive
//Author: Edem Dumenu
//Date: 03-25-2017
//Purpose: This is creating a new function to set the location of a link
//Arguments: "href" which is the name of the function.
//Errors/Exceptions: None
//Modification history: This is the original version
app.directive('href', function() {
    return {
        compile: function(element) {
            element.attr('target', '_self');
        }
    };
});//end of href

//Name: New  function
//Author: Edem Dumenu
//Date: 03-25-2017
//Purpose: This is creating a new function to open the side navigation bar
//Arguments: None.
//Errors/Exceptions: None
//Modification history: This is the original version
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}//end of openNav

//Name: New  function
//Author: Edem Dumenu
//Date: 03-25-2017
//Purpose: This is creating a new function to close the side navigation bar
//Arguments: None.
//Errors/Exceptions: None
//Modification history: This is the original version
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
    document.body.style.backgroundColor = "white";
}//end of closeNav

//Name: New  function
//Author: Edem Dumenu
//Date: 03-25-2017
//Purpose: This is creating a new function to place leading zeros in front of single digit values
//Arguments: "num"  which is the number in a single digit and "size" is the number of digits in a value.
//Errors/Exceptions: None
//Modification history: This is the original version
function pad(num, size) {
    var s = num+"";
    while (s.length < size) s = "0" + s;
    return s;
}//end of pad


