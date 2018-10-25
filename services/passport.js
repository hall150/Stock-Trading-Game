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
      proxy: true,
    },
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne ({googleId: profile.id});
      if (exisitingUser) {
        return done (null, exisitingUser);
      }
      const user = await new User ({googleId: profile.id}).save ();
      done (null, user);
    }
  )
);

const fetchAlbums = async () => {
  const res = await fetch (
    'https://rallycoding.herokuapp.com/api/music_albums'
  );
  const json = await res.json ();
  console.log (json);
};
fetchAlbums ();

// refactor of line 28-36
// (accessToken, refreshToken, profile, done) => {
//   User.findOne ({googleId: profile.id}).then (exisitingUser => {
//     if (exisitingUser) {
//       //we allready have a record w/ same id
//       done (null, exisitingUser);
//     } else {
//       // no user record record id
//       new User ({googleId: profile.id})
//         .save ()
//         .then (user => done (null, user));
//     }})

 
// Test - pull from google Auth
// console.log ('access token', accessToken);
// console.log ('refresh token', refreshToken);
// console.log ('profile:', profile);

// //fetch - return response object to return promise -line 40
// function fetchAlbums () {
//   fetch ('https://rallycoding.herokuapp.com/api/music_albums')
//     .then (res => res.json ())
//     //fetch resolves the promise with an object
//     .then (json => console.log (json));
// }

// fetchAlbums();

//async await - chrome
// async function fetchAlbums () { - prior to refactor
