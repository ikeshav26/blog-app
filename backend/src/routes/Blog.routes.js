import express from 'express';
import { createBlog,fetchAllBlogs,fetchBlogById, logginedUserBlogs, updateBlog } from '../controller/Blog.controller.js';
import { authUser } from '../middleware/Auth.middleware.js';



const router=express.Router();




router.post('/create',authUser,createBlog)
router.get('/feed',authUser,fetchAllBlogs);
router.get('/my-blogs',authUser,logginedUserBlogs)
router.get('/:id',authUser,fetchBlogById)
router.post('/update/:id',authUser,updateBlog)



export default router;