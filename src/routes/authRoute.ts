import express from "express";
import { handleRegister, handleLogin } from "../controllers";

// auth router
const authRouter = express.Router();

// Register New User | POST
authRouter.post("/register", handleRegister);

// Login User | POST
authRouter.post("/login", handleLogin);

export default authRouter;
