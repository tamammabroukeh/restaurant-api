import express from "express";
import {
  createRestaurant,
  deleteRestaurant,
  getAllRestaurants,
  getSignleRestaurant,
} from "../controllers";
import verifyJWT from "../middlewares/authMiddleware";

// restaurant router
const restaurantRouter = express.Router();

// Get All Restaurants | GET
restaurantRouter.get("/getAll", verifyJWT, getAllRestaurants);

// Get A Single Restaurant | GET
restaurantRouter.get("/get/:id", verifyJWT, getSignleRestaurant);

// Create A New restaurant | POST
restaurantRouter.post("/create", verifyJWT, createRestaurant);

// Delete A Restaurant | DELETE
restaurantRouter.delete("/delete/:id", verifyJWT, deleteRestaurant);

export default restaurantRouter;
