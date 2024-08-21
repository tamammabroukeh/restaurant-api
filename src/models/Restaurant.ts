import mongoose from "mongoose";
import { IRestaurant, IUser } from "../interfaces";
const RestaurantSchema = new mongoose.Schema<IRestaurant>(
  {
    title: {
      type: String,
      required: [true, "Restaurant title is required"],
    },
    foods: {
      type: Array,
    },
    rating: {
      type: Number,
      default: 1,
      min: 1,
      max: 5,
    },
    ratingCount: {
      type: String,
    },
    pickup: {
      type: Boolean,
      default: true,
    },
    logoUrl: {
      type: String,
    },
    isOpen: {
      type: Boolean,
      default: true,
    },
    imageUrl: {
      type: String,
    },
    delivery: { type: Boolean, default: true },
    code: { type: String },
    coords: {
      id: { type: String },
      title: { type: String },
      address: { type: String },
      latitude: { type: Number },
      longtude: { type: Number },
      latitudeDelta: { type: Number },
      longitudeDelta: { type: Number },
    },
  },
  { timestamps: true }
);
const Restaurant = mongoose.model<IRestaurant>("Restaurant", RestaurantSchema);
export default Restaurant;
