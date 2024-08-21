import express from "express";
import Food from "../../models/Food";
const getAllFoods = async (req: express.Request, res: express.Response) => {
  try {
    const foods = await Food.find();
    if (!foods) {
      return res.status(204).send({
        success: false,
        message: "No foods added yet",
      });
    }
    res.status(201).send({
      success: true,
      totalFoods: foods.length,
      foods,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({
      success: false,
      message: "Error in get all foods API",
      error,
    });
  }
};
export default getAllFoods;
