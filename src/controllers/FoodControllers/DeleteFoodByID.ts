import express from "express";
import Food from "../../models/Food";
const deleteFoodById = async (req: express.Request, res: express.Response) => {
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
    await Food.findByIdAndDelete(id).exec();
    res.status(201).send({
      success: true,
      message: `food deleted successfully`,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({
      success: false,
      message: "Error in delete food API",
      error,
    });
  }
};
export default deleteFoodById;
