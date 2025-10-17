import {Strategy as GoogleStrategy} from 'passport-google-oauth20';
import passport from 'passport';
import User from '../models/User.model.js';

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: `${process.env.API_URL}/auth/google/callback`,
      scope: ['profile', 'email'], // Explicitly request email and profile
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        // Extract email safely
        const email = profile.emails && profile.emails.length > 0 ? profile.emails[0].value : null;

        if (!email) {
          return done(new Error('No email provided by Google'), null);
        }

        // Check if user exists by providerId
        let user = await User.findOne({ providerId: profile.id, authProvider: 'google' });

        if (!user) {
          // Check if email already exists
          user = await User.findOne({ email });

          if (user) {
            // User exists with this email
            if (user.authProvider === 'local' && user.password) {
              // User has a local account with password - don't allow OAuth login
              return done(
                new Error(
                  'An account with this email already exists. Please sign in with your email and password instead.'
                ),
                null
              );
            }

            // Link Google account to existing user (OAuth to OAuth linking allowed)
            user.authProvider = 'google';
            user.providerId = profile.id;
            user.avatar =
              profile.photos && profile.photos.length > 0 ? profile.photos[0].value : null;
            user.emailVerified = true;
            await user.save();
          } else {
            // Create new user
            user = new User({
              name: profile.displayName || email.split('@')[0],
              email: email,
              authProvider: 'google',
              providerId: profile.id,
              avatar: profile.photos && profile.photos.length > 0 ? profile.photos[0].value : null,
              emailVerified: true,
            });
            await user.save();
          }
        }

        return done(null, user);
      } catch (err) {
        console.error('Google OAuth error', err);
        return done(err, null);
      }
    }
  )
);


export default passport;