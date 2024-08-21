import express from "express";
import Restaurant from "../../models/Restaurant";
const createRestaurant = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const {
      title,
      foods,
      rating,
      ratingCount,
      pickup,
      logoUrl,
      isOpen,
      imageUrl,
      delivery,
      code,
      coords,
    } = req.body;
    if (!title || !coords) {
      return res.status(400).send({
        success: false,
        message: "title and address are required",
      });
    }
    const newRestaurant = new Restaurant({
      title,
      foods,
      rating,
      ratingCount,
      pickup,
      logoUrl,
      isOpen,
      imageUrl,
      delivery,
      code,
      coords,
    });
    await newRestaurant.save();
    res.status(201).send({
      success: true,
      message: "New restaurant created successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({
      success: false,
      message: "Error in create restaurant API",
      error,
    });
  }
};
export default createRestaurant;
