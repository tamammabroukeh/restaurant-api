import jwt from "jsonwebtoken";
import express, { NextFunction } from "express";
import User from "../models/User";
const verifyJWT = (
  req: express.Request,
  res: express.Response,
  next: NextFunction
) => {
  try {
    const authHeader = req.headers.authorization || req.headers.Authorization;
    if (!authHeader?.toString().startsWith("Bearer "))
      return res.status(401).send({
        success: false,
        message: "Unauthorization",
      });
    const token: string = authHeader?.toString().split(" ")[1];
    jwt.verify(token, process.env.ACCESS_TOKEN as string, (err, decoded) => {
      if (err) {
        return res.status(401).send({
          success: false,
          message: "Unauthorization",
          err,
        });
      }
      // console.log(decoded);
      req.body.id = (<any>decoded)?.id;
      next();
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({
      success: false,
      message: "Please provide auth token",
      error,
    });
  }
};
export default verifyJWT;
