import express from "express";
import contactRouter from "./contactPath.js";
import ProductRoute from "./productRoute.js"
import BlogRoute from "./blogPath.js"
const mainRouter=express.Router();
mainRouter.use("/contact",contactRouter)
mainRouter.use("/product",ProductRoute)
mainRouter.use("/blog",BlogRoute)
export default mainRouter;