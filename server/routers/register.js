import express from "express";
import { registerUser } from "../controllers/register.js";

const router = express.Router();

<<<<<<< HEAD
// router.get("/", () => { });
=======
router.get("/", (req,res) => res.send('priyanshu'));
>>>>>>> 1f87a70db1ede4e53865855231c4d6bd050bdb93
router.post("/", registerUser);

export default router;