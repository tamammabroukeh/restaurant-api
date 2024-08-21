import express from "express";
import verifyJWT from "../middlewares/authMiddleware";
import {
  createCategory,
  deleteCategory,
  getAllCategories,
  updateCategory,
} from "../controllers";

// category router
const categoryRouter = express.Router();

// Get All Categories | POST 
categoryRouter.get("/getAll", verifyJWT, getAllCategories);

// Create A New Category | POST 
categoryRouter.post("/create", verifyJWT, createCategory);

// Update A Category | PATCH
categoryRouter.patch("/update/:id", verifyJWT, updateCategory);

// Delete A Category | DELETE
categoryRouter.delete("/delete/:id", verifyJWT, deleteCategory);

export default categoryRouter;
