var mongoose = require("mongoose");
var Student = require(__dirname+'/models/student');

//connect to test1 mongodb database in localhost
mongoose.connect('mongodb://localhost/test1', function (err) {
    if (err) throw err;
    console.log('Successfully connected');
});

//Student is the Model
var newStudent = new Student({
    firstName: 'Chandler',
    lastName: 'Bing'
});

//Save the model into the database
newStudent.save(function(err){
    if(err) throw err;
        console.log("Student inserted");
});
