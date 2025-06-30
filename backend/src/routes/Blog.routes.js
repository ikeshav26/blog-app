import express from 'express';
import { createBlog,deleteBlog,fetchAllBlogs,fetchBlogById, logginedUserBlogs, updateBlog } from '../controller/Blog.controller.js';
import { authUser } from '../middleware/Auth.middleware.js';



const router=express.Router();




router.post('/create',authUser,createBlog)
router.get('/feed',authUser,fetchAllBlogs);
router.get('/my-blogs',authUser,logginedUserBlogs)
router.get('/:id',authUser,fetchBlogById)
router.post('/update/:id',authUser,updateBlog)
router.get('/delete/:id',authUser,deleteBlog)



export default router;