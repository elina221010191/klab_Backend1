import mongoose from "mongoose";
const{model,Schema}=mongoose;
const blogSchema=new Schema(
    {
      description:{
        type:String,
        required:true
      },
      date:{
        type:String,
        required:true,
  },
    images:{
        type:Array,
        required:false,
  }
},
{
  timestamps:true
}
)
const BlogModel=model("Blog",blogSchema)
export default BlogModel;

