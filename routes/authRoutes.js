const passport = require ('passport');
//single route handle - express "app" obj - method get() - internal id of google to use ^ Google Strategy

module.exports = app => {
  app.get (
    '/auth/google',
    passport.authenticate ('google', {
      // asking google to utlise authorization v profile/email scopes built in
      scope: ['profile', 'email'],
    })
  );
  //second route handler w/ code auth to xchange for info - returns accessToken
  app.get ('/auth/google/callback', passport.authenticate ('google'));

  // if signedon user goes to following route -lg out
  app.get ('/api/logout', (req, res) => {
    req.logout(); //when req - kills cookie
    es.redirect('/')
    // res.send(req.user); //confirmation
  });

  app.get ('/api/current_user', (req, res) => {
    res.send (req.user);
  });
};
