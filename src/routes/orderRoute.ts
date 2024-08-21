import express from "express";
import verifyJWT from "../middlewares/authMiddleware";
import { changeOrderStatus, createPlaceOrder } from "../controllers";
import verifyRoles from "../middlewares/AdminMiddleware";

// order router
const orderRouter = express.Router();

// Create A Placeorder | POST
orderRouter.post("/create", verifyJWT, createPlaceOrder);

// Change Order Status | POST
orderRouter.post("/orderstatus/:id", verifyJWT, verifyRoles, changeOrderStatus);

export default orderRouter;
