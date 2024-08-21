import express from "express";
import Order from "../../models/Order";
import Food from "../../models/Food";

const createPlaceOrder = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { id, cart } = req.body;
    if (!id) {
      return res.status(400).send({
        success: false,
        message: "ID parameter is required",
      });
    }
    if (!cart) {
      return res.status(400).send({
        success: false,
        message: "your cart is empty",
      });
    }
    let total: string[] = [];
    let foods;
    let price = 0;
    for (let index = 0; index < cart.length; index++) {
      total[index] = cart[index].title;
      foods = await Food.find({ title: total[index] }).exec();
    }
    foods?.map((food) => (price += food.price));

    const newOrder = new Order({
      foods: cart,
      payment: price,
      buyer: id,
    });

    res.status(201).send({
      success: true,
      message: "Your placeorder is preparing",
      newOrder,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({
      success: false,
      message: "Error in place order API",
      error,
    });
  }
};
export default createPlaceOrder;
