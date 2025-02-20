import Contact from "../models/contactModal.js";
export const createContact=async(req,res)=>{
    try{
const{names,email,subject,message,phone}=req.body;
const newContact=new Contact({names,email,subject,message,phone});
await newContact.save();
res.status(201).json({success: true,message: "contact created successfully",Contact: newContact});



    }catch(error){
        res.status(500).json({success: false,message: "Server Error",error: error.message});

    }
}