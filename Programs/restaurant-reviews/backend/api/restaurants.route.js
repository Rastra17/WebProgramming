import express from "express";
import RestaurantsCtrl from "./restaurants.controller.js";

//Getting access to the express router
const router=express.Router();

//One route for demonstration
router.route("/").get(RestaurantsCtrl.apiGetRestaurants);

export default router;