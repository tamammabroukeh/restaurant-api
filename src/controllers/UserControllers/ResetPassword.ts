import express from "express";
import User from "../../models/User";
import bcrypt from "bcryptjs";
const resetPassword = async (req: express.Request, res: express.Response) => {
  try {
    const { email, newPassword, answer } = req.body;
    if (!email || !newPassword || !answer) {
      return res.status(400).send({
        success: false,
        message: "All fields are required!",
      });
    }
    const user = await User.findOne({ email, answer });
    if (!user) {
      return res.status(204).send({
        success: false,
        message: "User not found or invalid answer",
      });
    }
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = await bcrypt.hash(newPassword, salt);
    user.password = hashedPassword;
    await user.save();
    res.status(201).send({
      success: true,
      message: "Password reset successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({
      success: false,
      message: "Error in reset password api",
      error,
    });
  }
};
export default resetPassword;
