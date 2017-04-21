(function (angular) {
    var roiCourses = angular.module('roiCourses'); // one argument == look up module
    // attach controller to a module moduleOb.controller('name', impl)
    roiCourses.controller('CoursesController', CoursesController);

    CoursesController.$inject = ['$scope', '$http', '$interval'];
    function CoursesController($scope, $http, $interval) {
        //$scope.$on('timeChange', function (e, data) {
        //    $scope.errorMessage = data;

        //});

        //$interval(function () {
        //    $scope.someBooleanExpression = (new Date()).getSeconds() < 30;
        //}, 1000);
        

        // controller properties
        $scope.name = '';
        $scope.courses = [];

        // used in add form...
        $scope.newItem = {
            title: '',
            duration: 0,
            description: ''
        };

        // load data from backend
        getData().then(display);
        
        $scope.showFilter = true;
        // controller methods
        $scope.add = add;
        $scope.remove = remove;

        // event handler implementations
        function add() {

            //$scope.$emit('someEventName', { eventData: 123, eventOtherData: 'hi there' });
            //$scope.$broadcast('someEvent', { eventData: 123, eventOtherData: 'hi there' });


            var objectToAddToServer = $scope.newItem;

            addData(objectToAddToServer)
                .then(getData) // chaining promises
                .then(display) // chaining promises
                .then(clearForm) // chaining promises
                .then(clearError) // chaining promises
                .catch(displayError); // handling an error
        }

        function remove(course) {
            removeData(course.id)
                .then(getData)
                .then(display)
                .then(clearError)
                .catch(displayError);
        }

        // helper functions with $http
        function addData(item) {
            console.log('addData');
            var prom = $http.post('/courses', item);
            return prom; // returns a promise
        }

        function getData() {
            console.log('getData');
            return $http.get('/courses'); // returns a promise
        }

        function removeData(id) {
            console.log('removeData');
            return $http.delete('/course/' + id);
        }

        // helper functions without $http
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

            $scope.editForm.$setPristine();
        }
    }

})(angular); // IIFE