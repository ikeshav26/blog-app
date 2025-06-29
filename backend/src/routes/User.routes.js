import express from 'express';
import { Login, Logout, signup } from '../controller/User.controller.js';

const router=express.Router();




router.post('/signup',signup)
router.post('/login', Login)
router.get('/logout',Logout)




export default router;