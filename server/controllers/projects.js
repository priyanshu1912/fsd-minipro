import mongoose from "mongoose";
import ProjectModel from "../models/projectModel.js";
import FacultyModel from "../models/facultyModel.js";
import nodemailer from "nodemailer";

const handleErrors = (err) => {
    let errors = { title: '', message: '', creator: '' };

    //Validation errors
    if (err.message.includes('user validation failed')) {
        Object.values(err.errors).forEach(({ properties }) => {
            errors[properties.path] = properties.message;
        });
    }
    return errors;
}

export const getProject = async (req, res) => {
    try {
        const allProjects = await ProjectModel.find();
        res.send({ status: 200, projects: allProjects });
    } catch (error) {
        const errors = handleErrors(error);
        res.status(400).json(errors);
    }
}

export const createProject = async (req, res) => {
    const project = req.body;
    const username = req.params['username'];
    const newProject = new ProjectModel(project);

    try {
        await newProject.save();
        const faculty = await FacultyModel.findOneAndUpdate({ username }, { $push: { projects: newProject._id } });
        await ProjectModel.findOneAndUpdate({ _id: newProject._id }, { $set: { creatorID: faculty._id } });
        res.status(201).json(newProject);
    }
    catch (error) {
        const errors = handleErrors(error);
        res.status(400).json(errors);
    }
}

export const updateProject = async (req, res) => {
    const { id: _id } = req.params;
    const project = req.body;

    if (!mongoose.Types.ObjectId.isValid(_id))
        return res.status(404).json('No project with that ID!');

    const updatedProject = await ProjectModel.findByIdAndUpdate(_id, { ...project, _id }, { new: true });

    res.json(updatedProject);
}

export const deleteProject = async (req, res) => {
    const { id: _id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(_id))
        return res.status(404).send('No project with that ID!');

    await ProjectModel.findByIdAndRemove(id);
    res.json({ message: 'Project deleted successfully' });
}

export const applyProject = async (req, res) => {
    const id = req.params['id'];

    const output = `
        <h2>You have a new response on your project</h2>
        <h3>Here are the details of the user who wish to help you:</h3>
        <ul>
            <li>Name: ${req.body.name}</li>
            <li>Email: ${req.body.email}</li>
            <li>Program: ${req.body.program}</li>
        </ul>
        <p>Please feel free to contact him/her for your project!</p>
    `;

    console.log(id);

    if (!mongoose.Types.ObjectId.isValid(id))
        return res.status(404).send('No project with that ID!');

    const project = await ProjectModel.findById({ _id: id });
    const updatedProject = await ProjectModel.findByIdAndUpdate({ _id: id }, { appliedCount: project.appliedCount + 1 }, { new: true });
    const projectOwner = await FacultyModel.findById({ _id: project.creatorID });

    // console.log(projectOwner);
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: "mail.gauravsingh.live",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: "fsd@gauravsingh.live", // generated ethereal user
            pass: "7AEF8~_bzAP!", // generated ethereal password
        },
        tls: {
            rejectUnauthorized: false
        }
    });

    const recp = projectOwner.email;
    console.log(recp);
    // send mail with defined transport object
    let info = await transporter.sendMail({
        from: '"AmiSocial" <fsd@gauravsingh.live>', // sender address
        to: recp, // list of receivers
        subject: "Available to help you with your project", // Subject line
        text: "Hello world?", // plain text body
        html: output, // html body
    });

    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

    res.status(200).json("Mail sent successfully!");
}

