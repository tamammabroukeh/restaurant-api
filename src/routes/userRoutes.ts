import express from "express";
import {
  deleteAccount,
  getUser,
  resetPassword,
  updatePassword,
  updateUser,
} from "../controllers";
import verifyJWT from "../middlewares/authMiddleware";

// user router
const userRoute = express.Router();

// Get A User | GET
userRoute.get("/getUser", verifyJWT, getUser);

// Reset The Password | POST
userRoute.post("/resetpassword", verifyJWT, resetPassword);

// Update An User | PATCH
userRoute.patch("/updateUser", verifyJWT, updateUser);

// Update The Password | PATCH
userRoute.patch("/updatepassword", verifyJWT, updatePassword);

// Delete An Account | DELETE
userRoute.delete("/deleteaccount/:id", verifyJWT, deleteAccount);

export default userRoute;
