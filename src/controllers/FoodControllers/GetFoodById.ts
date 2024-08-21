import express from "express";
import Food from "../../models/Food";
const getFoodById = async (req: express.Request, res: express.Response) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).send({
        success: false,
        message: "ID parameter is required",
      });
    }
    const food = await Food.findById({ _id: id }).exec();
    if (!food) {
      return res.status(204).send({
        success: false,
        message: "No food match this ID",
      });
    }
    res.status(201).send({
      success: true,
      food,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({
      success: false,
      message: "Error in get food by Id API",
      error,
    });
  }
};
export default getFoodById;
