import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import morgan from "morgan";
import dbConnect from "./config/dbConn";
import mongoose from "mongoose";
import authRouter from "./routes/authRoute";
import userRoute from "./routes/userRoutes";
import restaurantRouter from "./routes/restaurantRoute";
import categoryRouter from "./routes/categoryRoute";
import foodRouter from "./routes/foodRoute";
import orderRouter from "./routes/orderRoute";
const PORT = process.env.PORT || 3000;
const app = express();
dotenv.config();

dbConnect();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

// routes
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/user", userRoute);
app.use("/api/v1/restaurant", restaurantRouter);
app.use("/api/v1/category", categoryRouter);
app.use("/api/v1/food", foodRouter);
app.use("/api/v1/placeorder", orderRouter);

app.get("/", (req, res) => {
  // Send a response to the client
  res.send("Hello, TypeScript + Node.js + Express!");
});

// Start the server and listen on the specified port

mongoose.connection.once("open", () => {
  console.log(`connect to mongodb ${mongoose.connection.host}`);
  app.listen(PORT, () => console.log(`Server Running on port ${PORT}`));
});
