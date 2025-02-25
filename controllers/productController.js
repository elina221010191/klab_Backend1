import cloudinary from "../utils/cloudinary.js"
import ProductModel from "../models/productModal.js"
import path from 'path'
export const AddProduct = async (req, res, next) => {
    try {
    
    //   if (!req.file) {
    //     return res.status(400).json({ error: "Image file is required" });
    //   }
  
    //   const filePath = path.resolve(req.file.path); // Convert to absolute path
  
    //   const result = await cloudinary.uploader.upload(filePath, {
    //     use_filename: true,
    //     unique_filename: false,
    //     overwrite: true,
    //   });
  
  
    //   if (!result || !result.url) {
    //     throw new Error("Failed to upload image to Cloudinary");
    //   }
  
      const product = new ProductModel({
        productName: req.body.productName,
        productPrice: req.body.productPrice,
        productCategory: req.body.productCategory,
        productDiscount:req.body.productDiscount,
        // productImage: {
        //   url: result.url,
        // },
      });
  
      const savedProduct = await product.save();
    //   console.log("Product saved successfully:", savedProduct);
  
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

