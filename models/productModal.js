import mongoose from "mongoose";
const{model,Schema}=mongoose;
const productSchema=new Schema(
    {
      productName:{
        type:String,
        required:true
      },
        productPrice:{
            type:integer,
            required:true
      },
      productCategory:{
        type:String,
        required:true
      },
      productDiscount:{
        type:integer,
        required:true,
        default:0
  },
    productImage:{
        url:{
        type:String,
        required:true
        }
  }
},
{
  timestamps:true
}
)
const Contact=model("Product",productSchema)
export default Product;

