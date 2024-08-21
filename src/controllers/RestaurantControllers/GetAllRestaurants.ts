import express from "express";
import Restaurant from "../../models/Restaurant";
const getAllRestaurants = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const restaurants = await Restaurant.find();
    if (!restaurants) {
      res.status(204).send({
        success: false,
        message: "No restaurants avaliable yet",
      });
    }
    res.status(201).send({
      success: true,
      totalCount: restaurants.length,
      restaurants,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({
      success: false,
      message: "Error in get all restaurants API",
      error,
    });
  }
};
export default getAllRestaurants;
