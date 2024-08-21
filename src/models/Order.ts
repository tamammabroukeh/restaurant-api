import mongoose from "mongoose";
import { IOrder } from "../interfaces";
const orderSchema = new mongoose.Schema<IOrder>(
  {
    foods: [{ type: mongoose.Schema.Types.ObjectId, ref: "Food" }],
    buyer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    payment: {},
    status: {
      type: String,
      enum: ["preparing", "prepare", "on the way", "delivered"],
      default: "preparing",
    },
  },
  { timestamps: true }
);
const Order = mongoose.model<IOrder>("Order", orderSchema);
export default Order;

/*

{
  "status":"prepare"
}
66be5128758e5d3df942c091

*/