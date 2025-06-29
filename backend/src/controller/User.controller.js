import User from "../models/User.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";


export const signup=async(req,res)=>{
    try{
        const {username,email,password}=req.body;
        if(!username || !email || !password){
            return res.status(400).json({ message: "All fields are required" });
        }

        const existingUser=await User.find({email});
        if(existingUser.length > 0){
            return res.status(400).json({ message: "User already exists" });
        }

        const hashedPassword=await bcrypt.hash(password, 10);
    

        const newUser=new User({
            username:username,
            email:email,
            password:hashedPassword
        })

        await newUser.save();

        const token=jwt.sign(
            { userId: newUser._id },
            process.env.JWT_SECRET,
            { expiresIn: "7d" }
        );

        res.cookie("token", token, {
            httpOnly: true,
            secure:true,
            sameSite: "None",
    })
        res.status(201).json({ message: "User created successfully", user: { id: newUser._id, username: newUser.username, email: newUser.email } });
    }catch(error){
        console.error("Error during signup:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}



export const Login=async(req,res)=>{
    try{
        const {email,password}=req.body;
        if(!email || !password){
            return res.status(400).json({ message: "All fields are required" });
        }

        const user=await User.findOne({ email });
        if(!user){
            return res.status(400).json({ message: "Invalid credentails" });
        }
        const isPasswordValid=await bcrypt.compare(password, user.password);
        if(!isPasswordValid){
            return res.status(400).json({ message: "Invalid credentials" });
        }
        const token=jwt.sign(
            { userId: user._id },
            process.env.JWT_SECRET,
            { expiresIn: "7d" }
        );
        res.cookie("token", token, {
            httpOnly: true,
            secure:true,
            sameSite: "None",
        });
        res.status(200).json({ message: "Login successful", user: { id: user._id, username: user.username, email: user.email } });
    }
    catch(error){
        console.error("Error during login:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}