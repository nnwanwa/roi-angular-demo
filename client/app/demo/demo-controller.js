(function (angular) {
    var roiDemo = angular.module('roiDemo'); // one argument == look up module
    // attach controller to a module moduleOb.controller('name', impl)
    roiDemo.controller('DemoController', ['$scope', '$interval', DemoController]);

    function DemoController($scope, $interval) {

        $interval(function () {
                $scope.currentTime = new Date();
                console.log($scope.currentTime);
        }, 1000);

    }

})(angular); // IIFE