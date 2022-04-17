import express from "express";
import { updateProfileItem, deleteProfileItem, updateBio, updateURL } from "../controllers/update.js";

const router = express.Router();

router.patch('/:type/:username/bio', updateBio);
router.patch('/:type/:username/url/:attr', updateURL);
router.patch('/:type/:username/:attr/', updateProfileItem);
router.delete('/:type/:username/:attr/', deleteProfileItem);

export default router;