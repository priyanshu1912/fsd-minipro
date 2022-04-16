import mongoose from "mongoose";
import bcrypt from "bcrypt";
import ProjectModel from "../models/projectModel.js";

const facultySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    program: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    // projects: {
    //     type: [ProjectModel],
    //     default: []
    // }
}, { collection: "faculty" });

//Hashing the password
facultySchema.pre('save', async function (next) {
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 12);
    }
    next();
});

const FacultyModel = new mongoose.model("faculty", facultySchema);

export default FacultyModel;