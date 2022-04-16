import mongoose from "mongoose";
import ProjectModel from "../models/projectModel.js";

export const getProject = async (req, res) => {
    try {
        const postMessages = await ProjectModel.find();
        res.send(200).json(postMessages);
    } catch (error) {
        res.status(404).json({ message: "Error!" });
    }
}

export const createProject = async (req, res) => {
    const post = req.body;
    const newPost = new ProjectModel(post);
    try {
        await newPost.save();
        res.status(201).json(newPost);
    }
    catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updateProject = async (req, res) => {
    const { id: _id } = req.params;
    const post = req.body;

    if (!mongoose.Types.ObjectId.isValid(_id))
        return res.status(404).send('No post with that ID!');

    const updatedPost = await ProjectModel.findById(_id, { ...post, _id }, { new: true });

    res.json(updatedPost);
}

export const deleteProject = async (req, res) => {
    const { id: _id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(_id))
        return res.status(404).send('No post with that ID!');

    await ProjectModel.findByIdAndRemove(id);
    res.json({ message: 'Post deleted successfully' });
}

export const applyProject = async (req, res) => {
    const { id: _id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(_id))
        return res.status(404).send('No post with that ID!');

    const post = await ProjectModel.findById(id);
    const updatedPost = await ProjectModel.findByIdAndUpdate(id, { appliedCount: post.appliedCount + 1 }, { new: true });

    res.json(updatedPost);
}

