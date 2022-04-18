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
    console.log(req.body)

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


export const updateProfileItem = async (req, res) => {
    const type = req.params['type'];
    const username = req.params['username'];
    const attr = req.params['attr'];
    const id = req.params['id'];
    // const id = req.body._id;
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

    if (type === "student") {
        var updatedProfile = await StudentModel.findOneAndUpdate({ username }, { $pull: { [field]: { _id: id } } }, { new: true });
        var updatedProfile = await StudentModel.findOneAndUpdate({ username }, { $push: { [field]: newDoc } }, { new: true });
    }
    else {
        var updatedProfile = await StudentModel.findOneAndUpdate({ username }, { $pull: { [field]: { _id: id } } }, { new: true });
        var updatedProfile = await FacultyModel.findOneAndUpdate({ username }, { $push: { [field]: newDoc } }, { new: true });
    }

    if (updatedProfile === null) {
        res.status(400).json("No user found!");
    }
    else {
        res.status(200).json(updatedProfile);
    }
}

export const deleteProfileItem = async (req, res) => {
    const type = req.params['type'];
    const username = req.params['username'];
    const attr = req.params['attr'];
    const id = req.body.id;

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
<<<<<<< HEAD
        var updatedProfile = await StudentModel.findOneAndUpdate({ username }, { $pull: { [field]: {oldDoc} } }, { new: true });
    }
    else {
        var updatedProfile = await FacultyModel.findOneAndUpdate({ username }, { $pull: { [field]: {oldDoc} } }, { new: true });
=======
        var updatedProfile = await StudentModel.findOneAndUpdate({ username }, { $pull: { [field]: { _id: id } } }, { new: true });
    }
    else {
        var updatedProfile = await FacultyModel.findOneAndUpdate({ username }, { $pull: { [field]: { _id: id } } }, { new: true });
>>>>>>> abee7bad02aaa690a583e534b6b5ee2debbb8216
    }

    if (updatedProfile === null) {
        res.status(400).json("No user found!");
    }
    else {
        res.status(200).json(updatedProfile);
    }
}