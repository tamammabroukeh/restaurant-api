import express from "express";
import Category from "../../models/Category";
const updateCategory = async (req: express.Request, res: express.Response) => {
  try {
    const { id } = req.params;
    const { title, imageUrl } = req.body;
    if (!title) {
      return res.status(400).send({
        success: false,
        message: "category title is required",
      });
    }
    const category = await Category.findById({ _id: id });

    const duplicate = await Category.findOne({ title });
    if (duplicate && title !== category?.title) {
      return res.status(409).send({
        success: false,
        message: "this title is already in use",
      });
    }
    if (!category) {
      return res.status(400).send({
        success: false,
        message: "No category matches this ID",
      });
    }
    if (title) category.title = title;
    if (imageUrl) category.imageUrl = imageUrl;
    await category.save();
    res.status(201).send({
      success: true,
      message: "Category updated successfully",
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error in update category API",
      error,
    });
  }
};
export default updateCategory;
