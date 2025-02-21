import {createContact,ListContact,FindContactById,DeleteByID,getAllContact,deleteContactById,getContactById,updateContactById} from "../controllers/contactController.js";
import express from "express";

const contactRouter=express();

contactRouter.post("/createContact",createContact);
contactRouter.get("/DeletecontactbyId/:id",DeleteByID)
contactRouter.get("/getAllContact/",getAllContact)
contactRouter.get("/getContactById/:id",getContactById)
contactRouter.delete("/deleteContactById/:id",deleteContactById)
contactRouter.put("/updateContactById/:id",updateContactById)

export default contactRouter;