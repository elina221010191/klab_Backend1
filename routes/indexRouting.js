import express from "express";
import contactRouter from "./contactPath.js";
import ProductRoute from "./productRoute.js"
const mainRouter=express.Router();
mainRouter.use("/contact",contactRouter)
mainRouter.use("/product",ProductRoute)
export default mainRouter;