import jwt from "jsonwebtoken";
import dotenv from "dotenv"
dotenv.config()
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3YzVlOTViNTRiZGE0YzQzYjZlNDUzMSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTc0MTAyMzU4MSwiZXhwIjoxNzQxMDI3MTgxfQ.zX-MdtWyZTxwua1PGAm4OYcupfs6ioHUaVBZIH8n8_4";
const secretKey = process.env.JWT_SECRET_KEY; // Replace with your actual secret

jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
        console.error("JWT Verification Error:", err.message);
    } else {
        console.log("Verified Token:", decoded);
    }
});