import mongoose from "mongoose";

const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URI ?? "");
  } catch (error) {
    console.error(error);
  }
};
export default dbConnect;
