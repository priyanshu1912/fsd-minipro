const mongoose = require("mongoose");

// const DB = "mongodb+srv://admin_gaurav:Amity9988@cluster0.cnnlb.mongodb.net/FSDProject?retryWrites=true&w=majority";

const DB = "mongodb://127.0.0.1:27017/registrationForm"

mongoose.connect(DB).then(() => {
    console.log("Connection successful.");
}).catch((err) => console.log("Connection not successful!"));
