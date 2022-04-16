import express from "express";
import { addProject, deleteProject, updateBio, updateURL } from "../controllers/update.js";

const router = express.Router();

router.patch('/:type/:username/bio', updateBio);
router.patch('/:type/:username/:attr', updateURL);
router.patch('/:type/:username/:attr/', addProject);
router.delete('/:type/:username/:attr/', deleteProject);

export default router;