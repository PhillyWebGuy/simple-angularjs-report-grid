var app = angular.module('myApp', ['ui.grid']);

app.controller('myController', function($scope, $http) {
    
    $scope.getData = function() {
    
        var myUrl = 'data/data.json?do=getData&startDate' + "=" + $scope.startDate + "&endDate" + "=" + $scope.endDate;
    
        $http({
            method: 'GET',
            url: myUrl
        }).success(function(data, status) {
            $scope.reportData = data.collection;
        }).error(function(data, status) {
            //console.log('error');
            //console.log(status);
        });
    }
});

app.directive('datePicker', function(){
    return {
        restrict: 'A',
        link: function(scope, element, attrs){
            $(element).datepicker(scope.$eval(attrs.datePicker));
        }
    };
});
