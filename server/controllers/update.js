import StudentModel from "../models/studentModel.js";
import FacultyModel from "../models/facultyModel.js";

export const addProject = async (req, res) => {
    const type = req.params['type'];
    const username = req.params['username'];
    const project = req.body;

    if (type === "student") {
        var updatedProfile = await StudentModel.findOneAndUpdate({ username }, { $push: { currentProjects: project } }, { new: true });
    }
    else {
        var updatedProfile = await FacultyModel.findOneAndUpdate({ username }, { $push: { currentProjects: project } }, { new: true });
    }

    if (updatedProfile === null) {
        res.status(400).json("No user found!");
    }
    else {
        res.status(200).json(updatedProfile);
    }
}

export const deleteProject = async (req, res) => {
    const type = req.params['type'];
    const username = req.params['username'];
    const project = req.body;

    if (type === "student") {
        var updatedProfile = await StudentModel.findOneAndUpdate({ username }, { $pull: { currentProjects: project } }, { new: true });
    }
    else {
        var updatedProfile = await FacultyModel.findOneAndUpdate({ username }, { $pull: { currentProjects: project } }, { new: true });
    }

    if (updatedProfile === null) {
        res.status(400).json("No user found!");
    }
    else {
        res.status(200).json(updatedProfile);
    }
}