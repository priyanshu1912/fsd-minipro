import StudentModel from "../models/studentModel.js";
import FacultyModel from "../models/facultyModel.js";

export const updateBio = async (req, res) => {
    const type = req.params['type'];
    const username = req.params['username'];
    const { bio } = req.body;

    if (type === "student") {
        var updatedProfile = await StudentModel.findOneAndUpdate({ username }, { bio: bio }, { new: true });
    }
    else {
        var updatedProfile = await FacultyModel.findOneAndUpdate({ username }, { bio: bio }, { new: true });
    }

    if (updatedProfile === null) {
        res.status(400).json("No user found!");
    }
    else {
        res.status(200).json(updatedProfile);
    }
}

export const updateURL = async (req, res) => {
    const type = req.params['type'];
    const username = req.params['username'];
    const attr = req.params['attr'];
    const { url } = req.body;

    if (type === "student") {
        var updatedProfile = await StudentModel.findOneAndUpdate({ username }, { [attr]: url }, { new: true });
    }
    else {
        var updatedProfile = await FacultyModel.findOneAndUpdate({ username }, { [attr]: url }, { new: true });
    }

    if (updatedProfile === null) {
        res.status(400).json("No user found!");
    }
    else {
        res.status(200).json(updatedProfile);
    }
}


export const addProject = async (req, res) => {
    console.log(req.body)
    const type = req.params['type'];
    const username = req.params['username'];
    const attr = req.params['attr'];
    const newDoc = req.body;

    if (attr === "projects") {
        var field = "currentProjects";
    }
    else if (attr === "publications") {
        var field = "publications";
    }
    else {
        var field = "achievements";
    }

    console.log(`${attr}, ${newDoc}`);
    console.log(newDoc);
 
    if (type === "student") {
        var updatedProfile = await StudentModel.findOneAndUpdate({ username }, { $push: { [field]: newDoc } }, { new: true });
    }
    else {
        var updatedProfile = await FacultyModel.findOneAndUpdate({ username }, { $push: { [field]: newDoc } }, { new: true });
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
    const attr = req.params['attr'];
    const oldDoc = req.body;

    if (attr === "projects") {
        var field = "currentProjects";
    }
    else if (attr === "publications") {
        var field = "publications";
    }
    else {
        var field = "achievements";
    }

    if (type === "student") {
        var updatedProfile = await StudentModel.findOneAndUpdate({ username }, { $pull: { [field]: oldDoc } }, { new: true });
    }
    else {
        var updatedProfile = await FacultyModel.findOneAndUpdate({ username }, { $pull: { [field]: oldDoc } }, { new: true });
    }

    if (updatedProfile === null) {
        res.status(400).json("No user found!");
    }
    else {
        res.status(200).json(updatedProfile);
    }
}