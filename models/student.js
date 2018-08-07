var mongoose = require("mongoose");

//Define Schema
var studentSchema = mongoose.Schema({

    firstName: String,
    lastName: String

});

//Define Model and studentrecords will be the name of the Collection
var Student = mongoose.model('StudentRecords',studentSchema);

module.exports = Student;