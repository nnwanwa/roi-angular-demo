(function (angular) {
    var coursesModule = angular.module('roiCourses');
    // register a factory on the module
    coursesModule.factory('roiCoursesFactory', roiCoursesFactory);

    // factory implementation - factory function is invoked
    function roiCoursesFactory($http) {
        var courses = [];
        // returned object is a singleton
        return {
            courses: courses,
            getData: getData
        };

        function getData() {
            // makes a request against /courses on the same server
            $http.get('/courses').then(function (response) {
                courses.length = 0;
                // response.data contains the parsed JSON from the server
                response.data.forEach(function (item) {
                    courses.push(item);
                });
            }, function (err) { });
        }

    }
    
    // 3NKT2C95

})(angular);