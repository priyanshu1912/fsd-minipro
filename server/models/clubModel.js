import mongoose from "mongoose";
import postModel from "../models/postModel.js";

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
    department: {
        type: String,
        required: true
    },
    numberOfStudents: {
        type: Number,
        required: true,
        default: 0
    },
    students: {
        type: [String],
    },
    posts: [{
        title: { type: String },
        description: { type: String },
        createdAt: { type: Date }

        // content: {type: String},
        // username: {type: String},
        // image: {type: String},
        // createdAt: { type: Date }
    }]
});


//New we need to create a collection
const ClubModel = new mongoose.model("club", clubSchema);

export default ClubModel;



