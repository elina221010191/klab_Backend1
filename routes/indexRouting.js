import express from "express";
import contactRouter from "./contactPath.js";
import ProductRoute from "./productRoute.js"
import BlogRoute from "./blogPath.js";
import UserRoute from "./userPath.js"
const mainRouter=express.Router();
mainRouter.use("/contact",contactRouter)
mainRouter.use("/product",ProductRoute)
mainRouter.use("/blog",BlogRoute)
mainRouter.use("/user",UserRoute)
export default mainRouter;