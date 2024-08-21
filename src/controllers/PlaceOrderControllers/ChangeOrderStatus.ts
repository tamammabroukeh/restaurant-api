import express from "express";
import Order from "../../models/Order";
const changeOrderStatus = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).send({
        success: false,
        message: "ID parameter is required",
      });
    }
    const { status } = req.body;
    if (!status) {
      return res.status(400).send({
        success: false,
        message: "Order status is required",
      });
    }
    await Order.findByIdAndUpdate(id, { status }, { new: true });
    res.status(201).send({
      success: true,
      message: "Order status updated successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({
      success: false,
      message: "Error in order status API",
      error,
    });
  }
};
export default changeOrderStatus;
