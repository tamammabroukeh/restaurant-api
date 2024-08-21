import express from "express";
import User from "../../models/User";
import bcrypt from "bcryptjs";
const updatePassword = async (req: express.Request, res: express.Response) => {
  try {
    const { id, oldPassword, newPassword } = req.body;
    const user = await User.findById({ _id: id }).exec();
    if (!user) {
      return res.status(204).send({
        success: false,
        message: "User not found",
      });
    }
    if (!oldPassword || !newPassword) {
      return res.status(400).send({
        success: false,
        message: "old password and new password are required",
      });
    }
    const isMatch = await bcrypt.compare(oldPassword, user.password);
    if (!isMatch) {
      return res.status(400).send({
        success: false,
        message: "old password is wrong",
      });
    }
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = await bcrypt.hash(newPassword, salt);
    user.password = hashedPassword;
    await user.save();
    res.status(201).send({
      success: true,
      message: "Password updated",
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
export default updatePassword;
