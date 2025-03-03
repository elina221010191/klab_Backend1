import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    userName: { type: String, required: true },
    userEmail: { type: String, required: true, unique: true },
    userPassword: { type: String, required: true },
    userRole: { type: String, enum: ["admin", "user"], default: "user" }  // Ensure default role
});

const User = mongoose.model("User", UserSchema);
export default User;
