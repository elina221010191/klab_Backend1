// import User from "../models/UserModal.js";
// import bcrypt from "bcrypt.js";
// import {generateAccessToken} from "../utils/tokengenerating.js";
// export const Register =async(req,res)=>{
//     try{
//         const{
//             userName,
//             userEmail,
//             userPassword,
//             userRole,
//         } = req.body;

//         const existingUse = await User.findOne({userEmail});
//         if (existingUsexistingUser){
//             return res.status(400).json({messsage:"Email already exists"});

//         }
//         const hashedPassword = await bcrypt.hash(userPassword,10);
//         const user =new User({
//             userName,
//             userEmail,
//             userPassword:hashedPassword,
//         })
//         }
//     }
// }

import User from "../models/userModal.js"
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"

export const Register = async (req, res) => {
    try {
        const { userName, userEmail, userPassword, userRole } = req.body;
        const existingUser = await User.findOne({ userEmail });
        if (existingUser) {
            return res.status(400).json({ message: "Email already exists" });
        }

        const hashedPassword = await bcrypt.hash(userPassword, 10);
        const user = new User({
            userName,
            userEmail,
            userPassword: hashedPassword,
            userRole
        });

        await user.save();
        const token = jwt.sign({id:user.id,userRole:user.userRole },process.env.JWT_SECRET_KEY, {expiresIn:'1h'});
        res.status(201).json({
            message: "Account created successfully!",
            user: {
                ...user.toObject(),
                tokens: {
                    accessToken:token,
                }
            },
        });
    } catch (error) {
        res.status(500).json({ message: "Failed to register user", error: error.message });
    }
};

export const Login = async (req, res) => {
    try {
        const { userEmail, userPassword } = req.body;
        const user = await User.findOne({ userEmail });

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        const isMatch = await bcrypt.compare(userPassword, user.userPassword);
        if (!isMatch) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        const accessToken = generateAccessToken(user);
        user.tokens = { accessToken };
        await user.save();

        const userResponse = {
            _id: user._id,
            userEmail: user.userEmail,
            tokens: { accessToken },
        };

        res.json({ user: userResponse });
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
};
