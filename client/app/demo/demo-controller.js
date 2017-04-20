(function (angular) {
    var roiDemo = angular.module('roiDemo'); // one argument == look up module
    // attach controller to a module moduleOb.controller('name', impl)
    roiDemo.controller('DemoController', ['$interval', 'roiGeo', DemoController]);

    function DemoController($interval, roiGeo) {
        // always do assign of this to some other variable.
        var that = this;


        // bind directly to the controller
        that.name = 'Nigel';
        console.log('IN controller constructor function');
        console.log(that);

        

        $interval(function () {
                that.currentTime = new Date();
                console.log(that.currentTime);
        }, 1000);

        roiGeo.getCurrentPosition().then(function (loc) {
            //warning....
            console.log('In async callback');
            console.log(that);
            that.currentLocation = {
                lat: loc.coords.latitude,
                lon: loc.coords.longitude
            };

        }, function (err) {
            console.log(err);

        });


    }

})(angular); // IIFE