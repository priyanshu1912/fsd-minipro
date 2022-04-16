import StudentModel from "../models/studentModel.js";
import FacultyModel from "../models/facultyModel.js";
import ClubModel from "../models/clubModel.js";

export const recommendPeople = async (req, res) => {
    const type = req.params['type'];
    const username = req.params['username'];

    if (type === "student") {
        var user = await StudentModel.findOne({ username });
    }
    else {
        var user = await FacultyModel.findOne({ username });
    }

    if (user === null) {
        res.status(400).json("No user found!");
    }
    else {
        var recommended = await StudentModel.find({ $and: [{ "program": user.program }, { "username": { $ne: user.username } }] }).limit(5).lean();
        res.status(200).json({ recommended });
    }
}

export const recommendClubs = async (req, res) => {
    const id = req.params['id'];

    var club = await ClubModel.findOne({ id });

    if (club === null) {
        res.status(400).json("No user found!");
    }
    else {
        var recommended = await ClubModel.find({ $and: [{ "department": club.department }, { "id": { $ne: user.id } }] }).limit(5).lean();
        res.status(200).json({ recommended });
    }
}

