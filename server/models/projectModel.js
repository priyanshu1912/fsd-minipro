import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
    title: { type: String, required: true },
    message: { type: String, required: true },
    creator: { type: String, required: true },
    creatorID: String,
    tags: [String],
    selectedFile: String,
    applied: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
}, { collection: "projects" });

const ProjectModel = new mongoose.model("project", projectSchema);

export default ProjectModel;