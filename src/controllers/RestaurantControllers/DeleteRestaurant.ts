import express from "express";
import Restaurant from "../../models/Restaurant";
const deleteRestaurant = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).send({
        sucsess: false,
        message: "Restaurant ID is required",
      });
    }
    await Restaurant.findByIdAndDelete(id);
    res.status(201).send({
      success: false,
      message: "Restaurant deleted successfully",
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error in delete restaurant  API",
      error,
    });
  }
};
export default deleteRestaurant;
