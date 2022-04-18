import mongoose from "mongoose";
import bcrypt from "bcrypt";
import pkg from "validator";
import clubModel from "../models/clubModel.js";

const { isEmail } = pkg;

const studentSchema = new mongoose.Schema({
    userType: {
        type: String
    },
    name: {
        type: String,
        required: [true, 'Please enter a name'],
        lowercase: true
    },
    username: {
        type: String,
        required: [true, 'Please enter an username'],
        unique: true,
        lowercase: true
    },
    email: {
        type: String,
        required: [true, 'Please enter an email'],
        unique: true,
        lowercase: true,
        validate: [isEmail, 'Please enter a valid email']
    },
    program: {
        type: String,
        required: [true, 'Please enter a program']
    },
    password: {
        type: String,
        required: [true, 'Please enter a password'],
        minlength: [6, 'Minimum password length is 6 characters']
    },
    profilePhoto: {
        type: String
    },
    bio: {
        type: String
    },
    currentProjects: [{
        title: { type: String },
        body: { type: String },
        url: { type: String }
    }],
    publications: [{
        title: { type: String },
        body: { type: String },
        url: { type: String }
    }],
    achievements: [{
        title: { type: String },
        body: { type: String },
        url: { type: String }
    }],
    mail: { type: String },
    linkedin: { type: String },
    github: { type: String },
    clubs: [{
        id: { type: String },
        name: { type: String },
        faculty: { type: String },
        description: { type: String },
        department: { type: String },
        students: { type: [String] },
        posts: [{
            username: { type: String },
            profilePhotot: { type: String },
            content: { type: String },
            createdAt: { type: Date }
        }]
    }]
}, { collection: "students" });

//Hashing the password
studentSchema.pre('save', async function (next) {
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 12);
    }
    next();
});

const StudentModel = new mongoose.model("student", studentSchema);

export default StudentModel;