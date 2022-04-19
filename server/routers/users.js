import express from "express";
import StudentModel from "../models/studentModel.js";
import FacultyModel from "../models/facultyModel.js";

var router = express.Router();

router.get("/:type/:username", async (req, res) => {
  const type = req.params['type'];
  const username = req.params['username'];
  try {
    if (type === "student") {
      var userData = await StudentModel.findOne({ username });
    }
    else {
      var userData = await FacultyModel.findOne({ username });
    }

    if (userData === null) { 
      res.status(400).json("No user found!");
    }
    else {
      res.status(200).json(userData);
    }
  }
  catch (err) {
    res.status(400).json(err.message);
  }
});

export default router;
