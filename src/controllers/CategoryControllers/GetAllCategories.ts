import express from "express";
import Category from "../../models/Category";
const getAllCategories = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const categories = await Category.find();
    if (!categories) {
      return res
        .status(204)
        .send({ success: false, message: "No categories found" });
    }

    res.status(201).send({
      success: true,
      totalCategories: categories.length,
      categories,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error in get all categories API",
      error,
    });
  }
};
export default getAllCategories;
