import express from "express";
import Food from "../../models/Food";
const createFood = async (req: express.Request, res: express.Response) => {
  try {
    const {
      title,
      price,
      description,
      category,
      code,
      foodTags,
      isAvailable,
      imageUrl,
      rating,
      ratingCount,
      restaurant,
    } = req.body;
    if (!title || !price || !description || !restaurant) {
      return res.status(400).send({
        success: false,
        message: "All fields are required",
      });
    }
    const duplicate = await Food.findOne({ title }).exec();

    if (duplicate) {
      return res.status(409).send({
        success: false,
        message: `${title} is already in use`,
      });
    }
    let newFood;
    if (typeof title === "string" && typeof price === "number") {
      newFood = new Food({
        title,
        price,
        description,
        category,
        code,
        foodTags,
        isAvailable,
        imageUrl,
        rating,
        ratingCount,
        restaurant,
      });
      await newFood.save();
    } else if (typeof title !== "string") {
      return res.status(400).send({
        success: false,
        message: `title food should be string`,
      });
    } else {
      return res.status(400).send({
        success: false,
        message: `price food should be number`,
      });
    }

    res.status(201).send({
      success: true,
      message: "Food created successfully",
      newFood,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({
      success: false,
      message: "Error in create Food API",
      error,
    });
  }
};
export default createFood;
