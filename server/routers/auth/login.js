import express from "express";
import { loginUser } from "../../controllers/login.js";

const router = express.Router();

router.get("/", (req,res) => res.send('login'));
router.post("/", loginUser);

export default router;