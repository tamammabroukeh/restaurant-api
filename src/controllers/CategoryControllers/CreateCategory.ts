import express from "express";
import Category from "../../models/Category";
const createCategory = async (req: express.Request, res: express.Response) => {
  try {
    const { title, imageUrl } = req.body;
    if (!title) {
      return res.status(400).send({
        success: false,
        message: "Category title is required",
      });
    }
    const duplicate = await Category.findOne({ title }).exec();

    if (duplicate) {
      return res.status(409).send({
        success: false,
        message: `${title} is already in use`,
      });
    }
    const newCategory = new Category({ title, imageUrl });

    await newCategory.save();

    res.status(201).send({
      success: true,
      message: "Category created successfully",
      newCategory,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({
      success: false,
      message: "Error in create category API",
      error,
    });
  }
};
export default createCategory;
