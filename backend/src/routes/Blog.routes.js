import express from 'express';
import { createBlog } from '../controller/Blog.controller.js';
import { authUser } from '../middleware/Auth.middleware.js';



const router=express.Router();




router.post('/create',authUser,createBlog)




export default router;