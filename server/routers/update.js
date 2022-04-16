import express from "express";
import { addProject, deleteProject, } from "../controllers/update.js";

const router = express.Router();

router.patch('/:type/:username/projects', addProject);
router.delete('/:type/:username/projects', deleteProject);

export default router;