import express from 'express';
import { createBlog,fetchAllBlogs,fetchBlogById } from '../controller/Blog.controller.js';
import { authUser } from '../middleware/Auth.middleware.js';



const router=express.Router();




router.post('/create',authUser,createBlog)
router.get('/feed',authUser,fetchAllBlogs);
router.get('/:id',authUser,fetchBlogById)



export default router;