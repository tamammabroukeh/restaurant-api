import express from "express";
import User from "../../models/User";
const getUser = async (req: express.Request, res: express.Response) => {
  try {
    const { id } = req.body;
    // console.log(req.body);
    const user = await User.findById({ _id: id }).exec();
    if (!user) {
      return res.status(204).send({
        success: false,
        message: "User not found",
      });
    }
    user.password = "";
    res.status(201).send({
      success: true,
      message: "User get succesfully",
      user,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({
      success: false,
      message: "Error in get user api",
      error,
    });
  }
};
export default getUser;
