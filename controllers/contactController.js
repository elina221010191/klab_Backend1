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

export const ListContact=async(req,res)=>
{
    try{
    const foundContact= await Contact.find();
    return res.status(200).json(
        {
            foundContact
        }
    )}
    catch(error)
    {
        res.status(500).json({success:false,
            message:"Server Error",
            error:error.message
        })
    }
}

export const FindContactById=async(req,res)=>
{
    try{
    const id=req.params.id;
    const foundContactId=await Contact.findById(id)
    if(!foundContactId)
    {
        res.status(404).json({
            message:"Message Not found",
        })
    }
    return res.status(200).json({
        contact:foundContactId
    })
}
catch(error)
{
    res.status(500).json({

        message:"Internal server Error",
        error:error.message
    })
}
}

export const DeleteByID =async(req,res)=>{
    try{
        const id=req.params.id
        const deleteContactbyID=await Contact.findByIdAndDelete(id)
        if (!deleteContactbyID){
            res.status(404).json({
            message:"not found"
        })
        }
        return res.status(200).json({
        deleteContactbyID
    })

    }
    catch(error){
        return res.status(500).json({
            message:"Internal Server Error",
            error:error.message,
        })

    }

}

export const getAllContact=async(re,res)=>{
    try{
        const contacts= await Contact.find();
        res.status(200).json({success:true,contacts})
    }
    catch(error)
    {
        res.status(500).json({success: false,message: "Server Error",error: error.message});
        
    }
}