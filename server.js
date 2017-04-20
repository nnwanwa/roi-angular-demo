var express = require('express');
var app = express();
app.set('json spaces', 2);
app.use(express.static('client'));

// model
var _courses = [{
    id: 1,
    title: 'AngularJS',
    duration: 4,
    description: 'AngularJS is a SPA framework etc...'
}, {
    id: 2,
    title: 'ReactJS',
    duration: 4,
    description: 'AngularJS is a universal Web and mobile app framework etc...'

}];
var _nextId = 3;

// controller
app.get('/courses', function (req, res) {
    // 'view'
    res.json(_courses);
});



app.listen(8080, function (err, success) {
    console.log('running');
});