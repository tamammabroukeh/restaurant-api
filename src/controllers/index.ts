// category
import getAllCategories from "./CategoryControllers/GetAllCategories";
import createCategory from "./CategoryControllers/CreateCategory";
import updateCategory from "./CategoryControllers/UpdateCategory";
import deleteCategory from "./CategoryControllers/DeleteCategory";
// food
import getAllFoods from "./FoodControllers/GetAllFoods";
import getFoodById from "./FoodControllers/GetFoodById";
import getFoodByRestaurantId from "./FoodControllers/GetFoodByRestaurantID";
import createFood from "./FoodControllers/CreateFood";
import updateFoodById from "./FoodControllers/UpdateFoodByID";
import deleteFoodById from "./FoodControllers/DeleteFoodByID";
// placeorder
import createPlaceOrder from "./PlaceOrderControllers/CreatePlaceOrder";
import changeOrderStatus from "./PlaceOrderControllers/ChangeOrderStatus";

// restaurant
import getAllRestaurants from "./RestaurantControllers/GetAllRestaurants";
import getSignleRestaurant from "./RestaurantControllers/GetSignleRestaurant";
import createRestaurant from "./RestaurantControllers/CreateRestaurant";
import deleteRestaurant from "./RestaurantControllers/DeleteRestaurant";

// user
import getUser from "./UserControllers/GetUser";
import resetPassword from "./UserControllers/ResetPassword";
import updatePassword from "./UserControllers/UpdatePassword";
import updateUser from "./UserControllers/UpdateUser";
import deleteAccount from "./UserControllers/DeleteAccount";

import handleLogin from "./AuthControllers/LoginController";
import handleRegister from "./AuthControllers/registerController";

export {
  handleLogin,
  handleRegister,
  createCategory,
  updateCategory,
  deleteCategory,
  getAllCategories,
  getAllFoods,
  getFoodById,
  getFoodByRestaurantId,
  createFood,
  updateFoodById,
  deleteFoodById,
  createPlaceOrder,
  changeOrderStatus,
  getAllRestaurants,
  getSignleRestaurant,
  createRestaurant,
  deleteRestaurant,
  getUser,
  resetPassword,
  updatePassword,
  updateUser,
  deleteAccount,
};
