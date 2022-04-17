import express from "express";
import { getProject, createProject, updateProject, deleteProject, applyProject } from "../controllers/projects.js";

const router = express.Router();

router.get('/', getProject);
router.post('/:username', createProject);
router.patch('/:id', updateProject);
router.delete('/:id', deleteProject);
router.patch('/:id/apply', applyProject);

export default router;   