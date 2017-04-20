(function (angular) {
    var roiCourses = angular.module('roiCourses'); // one argument == look up module
    // attach controller to a module moduleOb.controller('name', impl)
    roiCourses.controller('CourseDetailsController', CourseDetailsController);

    CourseDetailsController.$inject = ['$scope', '$http', '$location', '$routeParams'];
    function CourseDetailsController($scope, $http, $location, $routeParams) {

        $scope.backToCourses = backToCourses;

        var theId = $routeParams.id;

        getOne(theId).then(display);
        

        function getOne(id) {
            console.log('getOne');
            return $http.get('/course/' + id); // returns a promise
        }

        function display(response) {
            console.log('display');
            $scope.courseDetails = response.data;
        }

        function displayError(error) {
            console.log('displayError');
            $scope.errorMessage = error;
        }

        function backToCourses() {
            $location.path('/courses');
        }


    }

})(angular); // IIFE