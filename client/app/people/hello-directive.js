(function (angular) {
    var roiPeople = angular.module('roiPeople'); 
    
    roiPeople.directive('roiHello', function () {
        // DDO (Directive Definition Object)
        return {
            templateUrl: 'app/people/hello-directive-template.html',
            //template: '<h1>Hello from AngularJS</h1>',
            restrict: 'E',
            replace: true, // probably don't use this...
            controller: function ($scope, $interval) {
                //$scope.format = 'hh:mm';
                $interval(function () { $scope.time = new Date(); }, 1000);
            },
            scope: {
                format: '@'
            }
        }
    });

})(angular); // IIFE