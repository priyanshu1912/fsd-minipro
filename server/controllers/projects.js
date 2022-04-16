import mongoose from "mongoose";
import ProjectModel from "../models/projectModel.js";
import FacultyModel from "../models/facultyModel.js";

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
    const newProject = new ProjectModel(project);
    try {
        await newPost.save();
        // await FacultyModel.findByIdAndUpdate({})
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
        return res.status(404).json('No post with that ID!');

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
    const { id: _id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(_id))
        return res.status(404).send('No post with that ID!');

    const project = await ProjectModel.findById(id);
    const updatedProject = await ProjectModel.findByIdAndUpdate(id, { appliedCount: project.appliedCount + 1 }, { new: true });

    res.json(updatedProject);
}

