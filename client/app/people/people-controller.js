(function (angular) {
    var roiPeople = angular.module('roiPeople'); // one argument == look up module
    // attach controller to a module moduleOb.controller('name', impl)
    roiPeople.controller('PeopleController',
        ['$scope', PeopleController]);

    function PeopleController($scope) {

        // properties
        $scope.name = '';
        $scope.students = ['Haiming', 'James', 'Hayley', 'Jakub', 'Gergana'];
        $scope.showFilter = true;
        // methods
        $scope.add = add;
        $scope.remove = remove;

        // method implementations
        function add() {

            $scope.students.push($scope.newPersonName);
            $scope.newPersonName = '';
        }

        function remove(student) {
            var index = $scope.students.indexOf(student);
            $scope.students.splice(index, 1);
        }

    }

})(angular); // IIFE