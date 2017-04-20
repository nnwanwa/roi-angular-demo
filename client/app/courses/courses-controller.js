(function (angular) {
    var roiCourses = angular.module('roiCourses'); // one argument == look up module
    // attach controller to a module moduleOb.controller('name', impl)
    roiCourses.controller('CoursesController', CoursesController);

    CoursesController.$inject = ['$scope', '$http'];
    function CoursesController($scope, $http) {

        // properties
        $scope.name = '';

        // used in Add form...
        $scope.newItem = {
            title: '',
            duration: 0,
            description: ''
        };


        getData().then(display);

        // list from factory
        
        $scope.showFilter = true;
        // methods
        $scope.add = add;
        $scope.remove = remove;

        

        // method implementations
        function add() {
            // angular.copy is a deep copy of an object or array
            var objectToAddToServer = $scope.newItem;

            addData(objectToAddToServer)
                .then(getData) // chaining promises
                .then(display) // chaining promises
                .then(clearForm) // chaining promises
                .then(clearError) // chaining promises
                .catch(displayError); // handling an error
        }

        function addData(item) {
            console.log('addData');
            var prom = $http.post('/courses', item);
            return prom; // returns a promise
        }

        function getData() {
            console.log('getData');
            return $http.get('/courses'); // returns a promise
        }


        function getOne(id) {
            console.log('getData');
            return $http.get('/course/' + id); // returns a promise
        }

        function display(response) {
            console.log('display');
            $scope.courses = response.data;
        }

        function displayError(error) {
            console.log('displayError');
            $scope.errorMessage = error;
        }


        function clearError() {
            console.log('clearError');
            $scope.errorMessage = '';
        }

        function clearForm() {
            console.log('clearForm');
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