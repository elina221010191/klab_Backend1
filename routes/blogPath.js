import {AddBlog} from "../controllers/blogController.js"
import configureMulter from "../utils/multer.js";
import express from "express";
const BlogRoute=express.Router();
const upload = configureMulter();

BlogRoute.post("/addBlog",upload,AddBlog);

export default  BlogRoute;