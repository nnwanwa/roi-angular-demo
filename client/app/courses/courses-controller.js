(function (angular) {
    var roiCourses = angular.module('roiCourses'); // one argument == look up module
    // attach controller to a module moduleOb.controller('name', impl)
    roiCourses.controller('CoursesController', CoursesController);

    CoursesController.$inject = ['$scope', 'roiCoursesFactory'];
    function CoursesController($scope, roiCoursesFactory) {

        // properties
        $scope.name = '';

        // used in Add form...
        $scope.newItem = {
            title: '',
            duration: 0,
            description: ''
        };

        // list from factory
        $scope.courses = roiCoursesFactory.courses;
        $scope.showFilter = true;
        // methods
        $scope.add = add;
        $scope.remove = remove;

        roiCoursesFactory.getData();

        // method implementations
        function add() {
            // angular.copy is a deep copy of an object or array
            var objectToAddToList = angular.copy($scope.newItem);
            $scope.courses.push(objectToAddToList);
            // reset the form
            $scope.newItem.title = '';
            $scope.newItem.duration = '';
            $scope.newItem.description = '';
        }

        function remove(course) {
            var index = $scope.courses.indexOf(course);
            $scope.courses.splice(index, 1);
        }

    }

})(angular); // IIFE