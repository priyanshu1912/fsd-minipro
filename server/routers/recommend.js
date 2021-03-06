import express from "express";
import { recommendPeople, recommendClubs } from "../controllers/recommend.js";

const router = express.Router();

//http://localhost:5000/recommend/students/sgaurav
router.post('/:type/:username', recommendPeople);

//http://localhost:5000/recommend/club/
router.post('/club/', recommendClubs);

export default router;  