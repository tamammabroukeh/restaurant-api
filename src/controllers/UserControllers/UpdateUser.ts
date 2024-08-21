import express from "express";
import User from "../../models/User";
const updateUser = async (req: express.Request, res: express.Response) => {
  try {
    const { id, username, phone, address, profile } = req.body;
    const user = await User.findById({ _id: id }).exec();
    if (!user) {
      return res.status(204).send({
        success: false,
        message: "User not found",
      });
    }

    const duplicateUsername = await User.findOne({ username }).exec();
    if (duplicateUsername && username !== user.username) {
      return res.status(409).send({
        success: false,
        message: "Duplicate Username",
      });
    }

    const duplicatePhone = await User.findOne({ phone }).exec();
    if (duplicatePhone && phone !== user.phone) {
      return res.status(409).send({
        success: false,
        message: "Duplicate phone number",
      });
    }

    if (username) user.username = username;
    if (phone) user.phone = phone;
    if (profile) user.profile = profile;
    if (address && Array.isArray(address)) user.address = address;

    await user.save();
    res.status(201).send({
      success: true,
      message: "User updated succesfully",
      user,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({
      success: false,
      message: "Error in update user api",
      error,
    });
  }
};
export default updateUser;
