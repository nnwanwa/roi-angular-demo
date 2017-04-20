(function (angular) {
    var roiDemo = angular.module('roiDemo'); // one argument == look up module
    // attach controller to a module moduleOb.controller('name', impl)
    roiDemo.factory('roiGeo', ['$q', roiGeo]);

    function roiGeo($q) {

        return {
            getCurrentPosition: getCurrentPosition
        };
        
        function getCurrentPosition() {

            

                
            var promise = $q(function (resolve, reject) {

                navigator.geolocation.getCurrentPosition(function (pos) {
                    resolve(pos);
                }, function (err) {
                    reject(err);
                });



            });

            return promise;
        }
    }

})(angular); // IIFE