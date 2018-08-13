var mongoose = require("mongoose");
var Student = require(__dirname+'/models/student');

//connect to test1 mongodb database in localhost
mongoose.connect('mongodb://localhost/test1', function (err) {
    if (err) throw err;
    console.log('Successfully connected');
});

//Student is the Model
var newStudent = new Student({
    firstName: 'Rachel',
    lastName: 'Green'
});

//Below are the CRUD operations:

//CREATE the model into the database
newStudent.save(function(err){
    if(err) throw err;
       console.log("Student inserted");
 });


//READ all rows
Student.find(function(err,students){
    if(err) throw err;
    console.log(students);
});

//READ with conditions

//findOne function returns only one row.
Student.find({lastName:'Geller',firstName:'Monica'},function(err,student){
    if(err) throw err;
    console.log(student);

});

//READ using ID and UPDATE the value.
//We can also use .where().exec() function to give more constraints.
//findByIdAndUpdate()
Student.findById('5b71a4b670f31794ae4cc165',function(err,student){

    if(err) throw err;
   student.lastName = 'Geller';
   student.save(function(e){
       if(e) throw e;
       console.log("Student updated");
    });
});

//DELETE
//.findByIDAndRemove() can also be used.
Student.remove({lastName:'Bing'},function(e){
    if(e) throw e;
});
