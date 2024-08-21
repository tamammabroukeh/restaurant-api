import express from "express";
import Food from "../../models/Food";
const updateFoodById = async (req: express.Request, res: express.Response) => {
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
    const updatedFood = await Food.findByIdAndUpdate(
      id,
      {
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
      },
      { new: true }
    );
    res.status(201).send({
      success: true,
      message: `food updated successfully`,
      updatedFood,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({
      success: false,
      message: "Error in update food API",
      error,
    });
  }
};
export default updateFoodById;
