import express from "express";
import User from "../../models/User";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
const handleLogin = async (req: express.Request, res: express.Response) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).send({
        success: false,
        message: "Missing username or password",
      });
    }
    const foundUser = await User.findOne({ email }).lean().exec();
    if (!foundUser) {
      return res.status(204).send({
        success: false,
        message: "User not found",
      });
    }
    const isMatch = await bcrypt.compare(password, foundUser.password);
    if (!isMatch) {
      return res.status(400).send({
        success: false,
        message: "Invalid credientails",
      });
    }
    foundUser.password = "";
    const token = jwt.sign(
      { id: foundUser._id },
      process.env.ACCESS_TOKEN as string,
      {
        expiresIn: "1d",
      }
    );
    res.status(201).send({
      success: true,
      message: "Successfully logging",
      token,
      foundUser,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({
      success: false,
      message: "Error in login API",
      error,
    });
  }
};

export default handleLogin;
