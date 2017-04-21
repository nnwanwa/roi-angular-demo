(function (angular, undefined) {
    
    var roiApp = angular.module('roiApp', ['ngAnimate', 'ngRoute', 'roiPeople', 'roiCourses', 'roiDemo']); // root module declaration
    // moduleOb.config(cb) runs when app first starts up
    roiApp.config(config);

    function config($locationProvider, $routeProvider) {

        //$locationProvider.html5Mode(true);

        // module setup stuff, before the app displays anything...
        $routeProvider
            .when('/people', {
                controller: 'PeopleController',
                templateUrl: 'app/people/people-view.html'
            }) // when('/location', { controller: 'SomeController', templateUrl: 'path/to/view.html' }
            .when('/courses', {
                controller: 'CoursesController',
                templateUrl: 'app/courses/courses-view.html'
            })
            .when('/course/:id', {
                controller: 'CourseDetailsController',
                templateUrl: 'app/courses/course-details-view.html'
            })
            .when('/demo', {
                controller: 'DemoController',
                controllerAs: 'dc',
                templateUrl: 'app/demo/demo-view.html'
            })
            .otherwise({
                redirectTo: '/'
            });
    }

})(angular); // IIFE