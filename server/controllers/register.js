import StudentModel from "../models/studentModel.js";
import FacultyModel from "../models/facultyModel.js";
import jsonwebtoken from "jsonwebtoken";

const handleErrors = (err) => {
    let errors = { username: '', name: '', email: '', password: '', minlen: '' };

    //duplicate error code
    if (err.code === 11000) {
        errors.username = "Username already in use.";
        errors.email = "Email already in use";
    }

    //Validation errors
    if (err.message.includes('user validation failed')) {
        Object.values(err.errors).forEach(({ properties }) => {
            errors[properties.path] = properties.message;
        });
    }

    return errors;
}

const maxAge = 3 * 24 * 60 * 60;
const createToken = (id) => {
    return jsonwebtoken.sign({ id }, 'fsd project secret', {
        expiresIn: maxAge
    });
}

export const registerUser = (req, res) => {
    const userType = req.body.userType;
    try {
        if (userType === 'Student') {
            const newStudent = new StudentModel({
                userType: userType,
                name: req.body.name,
                username: req.body.username,
                email: req.body.email,
                program: req.body.program,
                password: req.body.password,
                profilePhoto: req.body.profilePhoto
            })

            newStudent.save(function (err, newStudent) {
                if (err) {
                    const errors = handleErrors(err);
                    res.status(400).json(errors);
                } else {
                    const token = createToken(newStudent._id);
                    res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
                    res.send({ status: 200, message: "Student record inserted!", studentObj: newStudent });
                }
                //res.send({ status: 200, message: "Student record inserted!", studentObj: newStudent });
            });
        }
        else if (userType === "Faculty") {
            const newFaculty = new FacultyModel({
                userType: userType,
                name: req.body.name,
                username: req.body.username,
                email: req.body.email,
                program: req.body.program,
                password: req.body.password,
                profilePhoto: req.body.profilePhoto
            })

            newFaculty.save(function (err, newFaculty) {
                if (err) {
                    const errors = handleErrors(err);
                    res.send({ status: 400, errors });
                } else {
                    res.send({ status: 200, message: "Faculty record inserted!", data: newFaculty });
                }
                //res.send({ status: 200, message: "Faculty record inserted!", facultyObj: newFaculty });
            });
        }
    }
    catch (error) {
        res.status(400).send(error);
    }
}
