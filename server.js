var express = require('express'); // 'import' express server
var bodyParser = require('body-parser');


var app = express(); // create express application object (app)
app.set('json spaces', 2); // format json nicely

app.use(express.static('client')); // serve static resources from client folder

app.use(bodyParser.json()); // plugs in the ability to read JSON serialized HTTP request bodies 



// model - an array of objects
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
var _nextId = 3; // we'll use this later
// controller - a handler to return json data when client requests /courses
app.get('/courses', function (req, res) {
    // 'view'
    res.json(_courses);
});

// Create handler
app.post('/courses', function (req, res) {
    var newCourse = req.body;
    // manual validation
    if (newCourse.title == '') {
        res.status(400).json({
            error: 'Title is required'
        });
        return;
    }
    newCourse.id = _nextId;
    _courses.push(newCourse);
    _nextId++;
    res.status(201).json(newCourse);
});


// listen for HTTP requests on port 8080
app.listen(8080, function (err, success) {
    console.log('running');
});