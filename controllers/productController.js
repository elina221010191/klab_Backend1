import ProductModel from "../models/productModal.js"
import {cloudinary } from "../utils/cloudinaryConfig.js"
import path from 'path'
export const AddProduct = async (req, res, next) => {

    try {
      //ensure files are uploaded before accessing them
      if(!req.files.images || req.files.images.length===0){
        return res.status(400).json({success:false,message:"No image uploaded"});
      }
// Upload the first image to Cloudinary
      const result = await cloudinary.uploader.upload(req.files.images[0].path);
      
      //get the secure image URL
      const images = result.secure_url;
  
      const product = new ProductModel({
        productName: req.body.productName,
        productPrice: req.body.productPrice,
        productCategory: req.body.productCategory,
        productDiscount:req.body.productDiscount,
        images,
      });
  
      const savedProduct = await product.save();
    
  
      return res.status(201).json({
        message: "Product created successfully",
        product: savedProduct,
      });
    } catch (error) {
      console.error("Error adding product:", error);
      return res.status(500).json({ error: error.message });
    }
  };
  export const getAllProduct= async(req,res)=>{
    try{
        const product= await ProductModel.find();
        res.status(200).json({success:true,product})
    
    }
    catch(error){
    res.status(404).json({success:false,message:"internal server",error:error.message})
    }
  }
  export const getProductById=async(req,res)=>{
    try{
        const {id}=req.params;
        const product= await ProductModel.findById(id);
        if(!product){
            res.status(404).json({success:false,message:"internal",error:error.message})
        }
      return   res.status(200).json({success:true,message:"product found"})
    }
    catch(error){
        res.status(404).json({success:false,message:"internal server error",error:error.message})
    }
  }
  export const DeleteById=async(req,res)=>{
    try{
        const {id}=req.params;
        const product=await ProductModel.findByIdAndDelete(id)
        if(!product){
            res.status(404).json({success:false,message:"internal server error",error:error.message})
        }
        return res.status(200).json({success:true,message:"product deleted"})
    }
    catch(error){
        res.status(404).json({success:false,message:"internal server error",error:error.message})
}
  }
  export const UpdatedProductById=async(req,res)=>{
    try{
        const {id}=req.params;
   const product=await ProductModel.findByIdAndUpdate(id,req.body);
   return res.status(200).json({success:true,message:"updated successfully"})

    }
    catch(error){
        res.status(404).json({success:false,messagae:"internal server",error:error.message})
    }
  }

