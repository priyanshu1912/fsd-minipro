const mongoose = require("mongoose");


const clubSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    faculty: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    numberOfStudents: {
        type: Number,
        required: true,
        default:0
    },
    students:{
        type:[StudentModel],
    }
    
});
 

//New we need to create a collection
const clubModel = new mongoose.model("club",clubSchema);


module.exports = clubModel;


  
  