import express from 'express';
import passport from '../config/passport.js';
import jwt from 'jsonwebtoken';


const router=express.Router();



router.get(
  '/google',
  passport.authenticate('google', {
    scope: ['profile', 'email'],
    session: false,
  })
);

router.get('/google/callback', (req, res, next) => {
  passport.authenticate('google', { session: false }, (err, user) => {
    if (err) {
      console.error('Google OAuth error', err);
      return res.redirect(
        `${process.env.CLIENT_URL}/login?error=oauth_failed&message="Authentication failed"`
      );
    } 

    if (!user) {
      return res.redirect(`${process.env.CLIENT_URL}/login?error=oauth_failed&message="No user found"`);
    }

    // Successful authentication, generate token
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

    res.redirect(`${process.env.CLIENT_URL}/?oauth=success`);
  })(req, res, next);
});




export default router;