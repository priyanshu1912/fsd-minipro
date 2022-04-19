import bcrypt from "bcrypt";
import jsonwebtoken from "jsonwebtoken";
import StudentModel from "../models/studentModel.js";
import FacultyModel from "../models/facultyModel.js";

const maxAge = 3 * 24 * 60 * 60;
const createToken = (id) => {
    return jsonwebtoken.sign({ id }, 'fsd project secret', {
        expiresIn: maxAge
    });
}

export const loginUser = async (req, res) => {
    try {
        const { userType, username, password } = req.body;

        if (userType === "Student") {
            const student = await StudentModel.findOne({ username });
            if (student) {
                const auth = await bcrypt.compare(password, student.password);
                if (auth) {
                    const token = createToken(student._id);
                    res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
                    res.send({status: 200, id: student._id , data: student});
                }
                else {
                    res.send({status: 400, message:"Invalid Username/Password!!"});
                }
            }
            else {
                res.send({status:400, message:"User not found!"});
            }
        }
        else {
            const faculty = await FacultyModel.findOne({ username });
            if (faculty) {
                const auth = await bcrypt.compare(password, faculty.password);
                if (auth) {
                    const token = createToken(faculty._id);
                    res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
                    res.send({status: 200, id: faculty._id, data: faculty});
                }
                else { 
                    res.send({status:400, message:"Invalid Username/Password!!"});
                }
            }
            else {
                res.send({status:400, message:"User not found!"});
            }
        }
    }
    catch (error) {
        res.status(400).send(error);
    }
}