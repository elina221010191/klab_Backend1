// import jwt from "jsonwebtoken";
// import User from "../models/UseModal.js";
// import dotenv from "dotenv"
// dotenv.config();

// export const auth = async (req,res,next)=>{
//     const authHeader =req.headers.authorization;

//     if(!authHeader){
//         return res.status(401).json({message:"Authorization header missing"});
//     }
//     const token =authHeader.split("")[1];
//     if(!token){
//         return res.status(401).json({message:"Token"});
//     }
//     try{
//         const decoded=jwt.verify(token.process.env.JWT_SECRET);
//         const user =await User.findOne({
//             _id: decoded._id,
//             "tokens.accessToken":token,
//         });

//         if(!user){
//             return res.status(401).json({message:"User not found or token invalid"});

//         }
//         req.token = token;
//         req.user=user;
//         next();
//     }
//     catch(error){
//         console.error("JWT Verification Error:",error);
//         res.status(401).json({message:"Authentication failed.",error:error.message});
//     }
// };

import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config()
export const authenticateToken = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({ message: "No token provided" });
    }

    const token = authHeader.split(" ")[1];

    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decoded) => {
        if (err) {
            console.error("JWT Verification Error:", err);
            return res.status(403).json({ message: "Invalid or expired token" });
        }

        req.user = decoded; // Attach user data to the request
        next();
    });
};


export const authorize = (role) => {
    return (req, res, next) => {
        if (req.user.userRole !== "admin") {
            return res.status(403).json('You do not have permission to perform this action');
        }
        next();
    };
};