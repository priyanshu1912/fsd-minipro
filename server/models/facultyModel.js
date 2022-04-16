import mongoose from "mongoose";
import bcrypt from "bcrypt";
import pkg from "validator";

const { isEmail } = pkg;

const facultySchema = new mongoose.Schema({
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
    projects: {
        type: [String],
        default: []
    }
}, { collection: "faculty" });

//Hashing the password using Mongoose Hooks - firing this function before document is saved in the DB
facultySchema.pre('save', async function (next) {
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 12);
    }
    next();
});

const FacultyModel = new mongoose.model("faculty", facultySchema);

export default FacultyModel;