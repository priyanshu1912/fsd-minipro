import express from "express";
import { logoutUser } from "../../controllers/logout.js";

const router = express.Router();

router.get("/", logoutUser);

export default router;