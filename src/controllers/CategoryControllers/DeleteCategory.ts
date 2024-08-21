import express from "express";
import Category from "../../models/Category";
const deleteCategory = async (req: express.Request, res: express.Response) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).send({
        success: false,
        message: "ID parameter is required",
      });
    }
    const category = await Category.findById({ _id: id });
    if (!category) {
      return res.status(400).send({
        success: false,
        message: "No category matches this ID",
      });
    }

    await Category.findByIdAndDelete(id);

    res.status(201).send({
      success: true,
      message: "Category deleted successfully",
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error in delete category API",
      error,
    });
  }
};
export default deleteCategory;
