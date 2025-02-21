import {createContact,ListContact} from "../controllers/contactController.js";
import express from "express";

const contactRouter=express();

contactRouter.post("/createContact",createContact);
contactRouter.get("/getcontact",ListContact)
export default contactRouter;