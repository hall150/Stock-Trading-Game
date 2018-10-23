const passport = require ('passport');
const GoogleStrategy = require ('passport-google-oauth20').Strategy;
const mongoose = require ('mongoose');
const keys = require ('../config/keys.js');

const User = mongoose.model ('users');

passport.serializeUser ((user, done) => {
  done (null, user.id);
});

passport.deserializeUser ((id, done) => {
  User.findById (id).then (user => {
    done (null, user);
  });
});

//application set up new google Strategy to auth users
passport.use (
  new GoogleStrategy (
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      //auth after google auth
      callbackURL: '/auth/google/callback',
    },
    (accessToken, refreshToken, profile, done) => {
      User.findOne ({googleId: profile.id}).then (exisitingUser => {
        if (exisitingUser) {
          //we allready have a record w/ same id
          done (null, exisitingUser);
        } else {
          // no user record record id
          new User ({googleId: profile.id})
            .save ()
            .then (user => done (null, user));
        }
      });

      // console.log ('access token', accessToken);
      // console.log ('refresh token', refreshToken);
      // console.log ('profile:', profile);
    }
  )
);
