import {AddProduct,getAllProduct, getProductById,DeleteById,UpdatedProductById} from "../controllers/productController.js"
import upload from "../middlewares/multer.js"
import express from "express";
const ProductRoute=express.Router();
ProductRoute.post("/addProduct",AddProduct);
ProductRoute.get("/getAllProduct",getAllProduct);
ProductRoute.get("/getProductById/:id",getProductById);
ProductRoute.delete("/DeleteById/:id",DeleteById)
ProductRoute.put("/UpdatedProductById/:id",UpdatedProductById)

export default  ProductRoute;