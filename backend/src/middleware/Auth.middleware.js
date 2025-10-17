import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

export const authUser=async(req,resizeBy,next)=>{
    try{
        const token=req.cookies.token
        if(!token){
            return res.status(401).json({ message: "Unauthorized access, please login" });
        }

        console.log("Token:", token);
        const decoded=jwt.verify(token, process.env.JWT_SECRET);
        console.log("Decoded Token:", decoded);

        if(!decoded){
            return res.status(401).json({ message: "Invalid token, please login again" });
        }

        req.user=decoded.id || decoded.userId;
        console.log("Authenticated User ID:", req.user);

        next();
    }
    catch(error){
        console.error("Error in authUser middleware:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
}




