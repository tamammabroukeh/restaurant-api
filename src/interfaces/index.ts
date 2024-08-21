import mongoose from "mongoose";

export interface IUser {
  username: string;
  email: string;
  password: string;
  profile: string;
  phone: string;
  userType: string;
  address?: string[];
  answer: string;
}
export interface IRestaurant {
  title: string;
  imageUrl?: string;
  logoUrl?: string;
  ratingCount?: string;
  code?: string;
  foods?: string[];
  isOpen?: boolean;
  delivery: boolean;
  pickup?: boolean;
  rating?: number;
  coords?: {
    id: string;
    title: string;
    address: string;
    latitude: number;
    longitude: number;
    latitudeDelta: number;
    longitudeDelta: number;
  };
}
export interface ICategory {
  title: string;
  imageUrl: string;
}
export interface IFood {
  title: string;
  description: string;
  imageUrl: string;
  foodTags: string;
  isAvailable: boolean;
  category: string;
  code: string;
  price: number;
  rating: number;
  ratingCount: string;
  restaurant: mongoose.Schema.Types.ObjectId;
}
export interface IOrder {
  foods: mongoose.Schema.Types.ObjectId[];
  payment?: String;
  buyer: mongoose.Schema.Types.ObjectId;
  status: string;
}
export interface ICartItem {
  price: number;
}
