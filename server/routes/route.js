import express from "express";
import { SignupUser } from "../controller/user_controller.js";

const router = express.Router();

router.post("/signup", SignupUser);

export default router;