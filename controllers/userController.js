import User from "../models/UserModal.js";
import bcrypt from "bcrypt.js";
import {generateAccessToken} from "../utils/tokengenerating.js";
export const Register =async(req,res)=>{
    try{
        const{
            userName,
            userEmail,
            userPassword,
            userRole,
        } = req.body;

        const existingUse = await User.findOne({userEmail});
        if (existingUsexistingUser){
            return res.status(400).json({messsage:"Email already exists"});

        }
        const hashedPassword = await bcrypt.hash(userPassword,10);
        const user =new User({
            userName,
            userEmail,
            userPassword:hashedPassword,
        })
        }
    }
}
