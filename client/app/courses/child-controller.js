(function (angular) {
    var roiCourses = angular.module('roiCourses'); // one argument == look up module
    // attach controller to a module moduleOb.controller('name', impl)
    roiCourses.controller('ChildController', ChildController);

    ChildController.$inject = ['$scope', '$http', '$interval'];
    function ChildController($scope, $http, $interval) {
        
        //$interval(function () {
        //    $scope.$emit('timeChange', { time: new Date() });

        //}, 2000);

        //$scope.$on('someEvent', function (e, data) {
        //    $scope.eventData = data;

        //});

    }

})(angular); // IIFE