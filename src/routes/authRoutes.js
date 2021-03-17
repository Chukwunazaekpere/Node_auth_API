import express from "express";
import { registerUser, loginUser, allUsers } from "../controllers/authentication/authController.js"


const authRouter = express.Router();

authRouter.post("/login", loginUser);

authRouter.post("/register", registerUser);

authRouter.get("/allUsers", allUsers)

export default authRouter;



