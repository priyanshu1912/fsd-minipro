import bcrypt from "bcrypt";

import StudentModel from "../models/studentModel.js";
import FacultyModel from "../models/facultyModel.js";

export const loginUser = async (req, res) => {
    try {
        const { userType, userName, userPassword } = req.body;
        userPassword = await bcrypt.hash(userPassword, 12);

        if (userType === "Student") {


            StudentModel.findOne({ username: userName }, function (err, foundStudent) {
                if (!err) {
                    if (foundStudent) {
                        if (foundStudent.password === userPassword) {
                            res.redirect("/student/foundStudent.username");
                        }
                        else {
                            res.json("Wrong Crendentials!!");
                            console.log("student not found");
                        }
                    }
                    else {
                        res.json("Wrong Crendentials!!");
                        console.log("student not found");
                    }
                }
            });
        }
        else {
            FacultyModel.findOne({ email: userName }, function (err, foundTeacher) {
                if (!err) {
                    if (foundTeacher) {
                        if (foundTeacher.password === userPassword) {
                            res.redirect("/student/foundTeacher.username");
                        }
                        else {
                            res.json("Wrong Crendentials!!");
                            console.log("Mentor not found");
                        }
                    }
                    else {
                        res.json("Wrong Crendentials!!");
                        console.log("Mentor not found");
                    }
                }
            });
        }
    }
    catch (error) {
        res.status(400).send(error);
    }
}