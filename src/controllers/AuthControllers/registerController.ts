import express from "express";
import User from "../../models/User";
import bcrypt from "bcryptjs";
const handleRegister = async (req: express.Request, res: express.Response) => {
  try {
    const {
      phone,
      username,
      email,
      password,
      profile,
      address,
      userType,
      answer,
    } = req.body;
    if (
      !Array.isArray(address) ||
      !username ||
      !phone ||
      !email ||
      !password ||
      !userType ||
      !answer
    ) {
      return res.status(400).send({
        success: false,
        message: "All fields are required!",
      });
    }
    const foundUser = await User.findOne({ email }).exec();
    if (foundUser) {
      return res.status(204).send({
        success: false,
        message: "Email Already exists please login",
      });
    }
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    // create new user
    const user = await User.create({
      email,
      password: hashedPassword,
      username,
      phone,
      address,
      profile,
      userType,
      answer,
    });
    res.status(201).send({
      success: true,
      message: "Successfully registered",
      user,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({
      success: false,
      message: "Error in register API",
      error,
    });
  }
};

export default handleRegister;
/*
client
{
  "username":"Tammam8",
  "email":"anything8@gmail.com",
  "password":"12345678910",
  "phone":"583475y8345",
  "address":["Syria"],
  "userType":"client",
  "answer":"sport"
}

client
{
  "username":"Tammam",
  "email":"tammam@gmail.com",
  "password":"12345678",
  "phone":"5834658345",
  "address":["Syria", "Damascus"],
  "userType":"admin",
  "answer":"gym"
}

admin
{
  "username":"Tammam123",
  "email":"tammam123@gmail.com",
  "password":"12345",
  "phone":"58123",
  "address":["Syria", "Damascus"],
  "userType":"admin",
  "answer":"gym"
}
*/
