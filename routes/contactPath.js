import {createContact,ListContact,FindContactById,DeleteByID,getAllContact} from "../controllers/contactController.js";
import express from "express";

const contactRouter=express();

contactRouter.post("/createContact",createContact);
contactRouter.get("/getcontact",ListContact)
contactRouter.get("/findcontactbyId/:id",FindContactById)
contactRouter.get("/DeletecontactbyId/:id",DeleteByID)
contactRouter.get("/getAllContact/",getAllContact)
export default contactRouter;