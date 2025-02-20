import {createContact} from "../controllers/contactController.js";
import express from "express";

const contactRouter=express();

contactRouter.post("/createContact",createContact);
export default contactRouter;