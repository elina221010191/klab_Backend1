import BlogModel from "../models/blogModal.js"
import {cloudinary } from "../utils/cloudinaryConfig.js"
import path from 'path'


export const AddBlog = async (req, res, next) => {

    try {
      //ensure files are uploaded before accessing them
      if(!req.files.images || req.files.images.length===0){
        return res.status(400).json({success:false,message:"No image uploaded"});
      }
// Upload the first image to Cloudinary
      const result = await cloudinary.uploader.upload(req.files.images[0].path);
      
      //get the secure image URL
      const images = result.secure_url;
  
      const blog = new BlogModel({
        date: req.body.date,
        description: req.body.description,
        images,
      });
  
      const savedBlog = await blog.save();
    
  
      return res.status(201).json({
        message: "Blog created successfully",
        blog: savedBlog,
      });
    } catch (error) {
      console.error("Error adding Blog:", error);
      return res.status(500).json({ error: error.message });
    }
  };

// export const AddBlog = async (req, res, next) => {
//         try {
//           // Check if req.files exists before trying to access it
//          // const images = req.files ? req.files.map(file => file.path) : [];
//           if(!req.files.images || req.files.images.length===0){
//             return res.status(400).json({success:false,message:"No image uploaded"});
//           }
//           // Or if you're using req.file for a single file
//           // const image = req.file ? req.file.path : null;
          
//           // Rest of your blog creation logic
//           const newBlog = new Blog({
//             description: req.body.discription,
//             date: req.body.dateValue,
//           //  images: images,  // Use the safely obtained images
//             // other properties...
//           });
          
//           await newBlog.save();
//           return res.status(201).json({ success:true,message: "Blog created successfully", Blog: newBlog });
//         } catch (error) {
//           console.error(error);
//           res.status(500).json({success:false, message: "Error creating blog", error: error.message });
//         }
//       };

//     try {
//       //ensure files are uploaded before accessing them
//       if(!req.files.images || req.files.images.length===0){
//         return res.status(400).json({success:false,message:"No image uploaded"});
//       }
// // Upload the first image to Cloudinary
//       const result = await cloudinary.uploader.upload(req.files.images[0].path);
      
//       //get the secure image URL
//       const images = result.secure_url;
  
//       const blog = new BlogModel({
//         description: req.body.description,
//             date: req.body.date,
//         images ,
//       });
  
//       const savedBlog = await blog.save();
    
  
//       return res.status(201).json({
//         message: "Blog created successfully",
//         blog: savedBlog,
//       });
//     } catch (error) {
//       console.error("Error adding blog:", error);
//       return res.status(500).json({ error: error.message });
//     }
//   };
//   export const getAllProduct= async(req,res)=>{
//     try{
//         const product= await ProductModel.find();
//         res.status(200).json({success:true,product})
    
//     }
//     catch(error){
//     res.status(404).json({success:false,message:"internal server",error:error.message})
//     }
//   }
//   export const getProductById=async(req,res)=>{
//     try{
//         const {id}=req.params;
//         const blog= await BlogModel.findById(id);
//         if(!blog){
//             res.status(404).json({success:false,message:"internal",error:error.message})
//         }
//       return   res.status(200).json({success:true,message:"blog found"})
//     }
//     catch(error){
//         res.status(404).json({success:false,message:"internal server error",error:error.message})
//     }
//   }
//   export const DeleteById=async(req,res)=>{
//     try{
//         const {id}=req.params;
//         const product=await ProductModel.findByIdAndDelete(id)
//         if(!product){
//             res.status(404).json({success:false,message:"internal server error",error:error.message})
//         }
//         return res.status(200).json({success:true,message:"product deleted"})
//     }
//     catch(error){
//         res.status(404).json({success:false,message:"internal server error",error:error.message})
// }
//   }
//   export const UpdatedProductById=async(req,res)=>{
//     try{
//         const {id}=req.params;
//    const product=await ProductModel.findByIdAndUpdate(id,req.body);
//    return res.status(200).json({success:true,message:"updated successfully"})

//     }
//     catch(error){
//         res.status(404).json({success:false,messagae:"internal server",error:error.message})
//     }
//   }

