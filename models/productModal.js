import mongoose from "mongoose";
const{model,Schema}=mongoose;
const productSchema=new Schema(
    {
      productName:{
        type:String,
        required:true
      },
        productPrice:{
            type:Number,
            required:true
      },
      productCategory:{
        type:String,
        required:true
      },
      productDiscount:{
        type:Number,
        required:true,
        default:0
  },
    productImage:{
        url:{
        type:String,
        required:false
        }
  }
},
{
  timestamps:true
}
)
const ProductModel=model("Product",productSchema)
export default ProductModel;

