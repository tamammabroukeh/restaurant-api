import express from "express";
import Food from "../../models/Food";
const getFoodByRestaurantId = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).send({
        success: false,
        message: "ID parameter is required",
      });
    }
    const foods = await Food.find({ restaurant: id }).exec();
    if (!foods) {
      return res.status(204).send({
        success: false,
        message: "No food match this ID",
      });
    }
    res.status(201).send({
      success: true,
      totalFoods: foods.length,
      message: `food base on restaurant`,
      foods,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({
      success: false,
      message: "Error in get foods by restaurant Id API",
      error,
    });
  }
};
export default getFoodByRestaurantId;
