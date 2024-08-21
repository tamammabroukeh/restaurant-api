import express from "express";
import User from "../../models/User";
const deleteAccount = async (req: express.Request, res: express.Response) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).send({
        success: false,
        message: "ID parameter is required!s",
      });
    }
    await User.findByIdAndDelete({ _id: id }).exec();
    res.status(201).send({
      success: true,
      message: "Your account has been deleted!",
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
export default deleteAccount;
