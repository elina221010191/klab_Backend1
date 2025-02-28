import {AddBlog,getAllBlog,getBlogById,DeleteById,updateBlogById} from "../controllers/blogController.js"
import configureMulter from "../utils/multer.js";
import express from "express";
const BlogRoute=express.Router();
const upload = configureMulter();

BlogRoute.post("/addBlog",upload,AddBlog);
BlogRoute.get("/getAllBlog",getAllBlog)
BlogRoute.get("/getBlogById/:id",getBlogById)
BlogRoute.delete("/DeleteById/:id",DeleteById)
BlogRoute.put("/updateBlogById/:id",updateBlogById)
export default  BlogRoute;