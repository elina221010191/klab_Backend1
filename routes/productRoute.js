import {AddProduct,getAllProduct, getProductById,DeleteById,UpdatedProductById} from "../controllers/productController.js"
import configureMulter from "../utils/multer.js";
import express from "express";
const ProductRoute=express.Router();
const upload = configureMulter();
ProductRoute.post("/addProduct",upload,AddProduct);
ProductRoute.get("/getAllProduct",getAllProduct);
ProductRoute.get("/getProductById/:id",getProductById);
ProductRoute.delete("/DeleteById/:id",DeleteById)
ProductRoute.put("/UpdatedProductById/:id",UpdatedProductById)

export default  ProductRoute;