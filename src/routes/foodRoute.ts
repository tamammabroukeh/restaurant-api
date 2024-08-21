import express from "express";
import verifyJWT from "../middlewares/authMiddleware";
import {
  createFood,
  deleteFoodById,
  getAllFoods,
  getFoodById,
  getFoodByRestaurantId,
  updateFoodById,
} from "../controllers";

// food router
const foodRouter = express.Router();

// Get ALl Foods | GET
foodRouter.get("/getAll", getAllFoods);

// Get Food By ID | GET
foodRouter.get("/get/:id", getFoodById);

// Get Food By Restaurant ID | GET
foodRouter.get("/getByRestaurant/:id", getFoodByRestaurantId);

// Create A New Food | POST
foodRouter.post("/create", verifyJWT, createFood);

// Update A Food | PATCH
foodRouter.patch("/update/:id", verifyJWT, updateFoodById);

// Delete A Food | DELETE
foodRouter.delete("/delete/:id", verifyJWT, deleteFoodById);

export default foodRouter;
