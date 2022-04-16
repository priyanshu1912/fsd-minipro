import mongoose from "mongoose";
import bcrypt from "bcrypt";

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