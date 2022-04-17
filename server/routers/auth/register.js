import express from "express";
import { registerUser } from "../../controllers/register.js";

const router = express.Router();


// router.get("/", () => { });

router.get("/", (req, res) => res.send('priyanshu'));
router.post("/", registerUser);

export default router;