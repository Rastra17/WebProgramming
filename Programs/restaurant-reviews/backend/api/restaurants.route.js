import express from "express";

//Getting access to the express router
const router=express.Router();

//One route for demonstration
router.route("/").get((req, res)=>res.send("Hello World"));

export default router;