import express, { NextFunction } from "express";
import User from "../models/User";
const verifyRoles = async (
  req: express.Request,
  res: express.Response,
  next: NextFunction
) => {
  try {
    const { id } = req.body;
    const user = await User.findById({ _id: id }).exec();
    if (user?.userType !== "admin") {
      return res.status(401).send({
        success: false,
        message: "Unauthorized",
      });
    } else {
      next();
    }
  } catch (error) {
    console.error(error);
    res.status(500).send({
      success: false,
      message: "Un-Authorized",
      error,
    });
  }
};
export default verifyRoles;
