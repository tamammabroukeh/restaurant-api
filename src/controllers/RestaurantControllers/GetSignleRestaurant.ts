import express from "express";
import Restaurant from "../../models/Restaurant";
const getSignleRestaurant = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).send({
        success: false,
        message: "ID parameter is required!",
      });
    }
    const restaurant = await Restaurant.findById({ _id: id }).exec();
    if (!restaurant) {
      return res.status(204).send({
        success: false,
        message: "Noe restaurant does match this ID",
      });
    }
    res.status(201).send({
      success: true,
      restaurant,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({
      success: false,
      message: "Error in get single restaurant  API",
      error,
    });
  }
};
export default getSignleRestaurant;
/*

{
    "title": "pizza hut",
    "imageUrl":
      "https://www.zilliondesigns.com/blog/wp-content/uploads/Dominos-Pizza-logo-2.jpg",
    "foods": [
      {
        "dishName": "chicken pizza",
        "dishPic":
          "https://www.zilliondesigns.com/blog/wp-content/uploads/Dominos-Pizza-logo-2.jpg",
        "price": 5
      }
    ],
    "time": "9am to 9pm",
    "pickup": true,
    "delivery": true,
    "isOpen": true,
    "logoUrl":
      "https://www.zilliondesigns.com/blog/wp-content/uploads/Dominos-Pizza-logo-2.jpg",
    "rating": 5,
    "ratingCount": "5",
    "code": "1234",
    "coords": {
      "id": "123456",
      "latitude": "1234",
      "latitudeDelta": "1234",
      "longitude": "1234",
      "longitudeDelta": "1234",
      "address": "mumbai india"
    }
  }



  {
    "title": "flafel",
    "imageUrl":
      "https://www.zilliondesigns.com/blog/wp-content/uploads/Dominos-Pizza-logo-2.jpg",
    "foods": [
      {
        "dishName": "chicken flafel",
        "dishPic":
          "https://www.zilliondesigns.com/blog/wp-content/uploads/Dominos-Pizza-logo-2.jpg",
        "price": 3
      }
    ],
    "time": "9am to 9pm",
    "pickup": true,
    "delivery": false,
    "isOpen": true,
    "logoUrl":
      "https://www.zilliondesigns.com/blog/wp-content/uploads/Dominos-Pizza-logo-2.jpg",
    "rating": 4,
    "ratingCount": "5",
    "code": "123",
    "coords": {
      "id": "12345",
      "latitude": "123",
      "latitudeDelta": "123",
      "longitude": "123",
      "longitudeDelta": "123",
      "address": "mumbai india"
    }
  }

*/
