const path = require('path');
const loopback = require('loopback');

module.exports = function(app) {
  
  // Make the client folder accessible for the app.
  
	// after verification on email adress, this route generate verified.ejs page response in the client browser.
  app.get('/verified', function(req, res) {
    res.render('verified');
  });

  //send an email with instructions to reset an existing user's password
  app.post('/api/profile/reset', function(req, res, next) {
    User.resetPassword({
      email: req.body.email
    }, function(err) {
      if (err) {
        return res.status(401).send(err);}
      res.render('response', {
        title: 'Password reset requested',
        content: 'Check your email for further instructions',
        redirectTo: '/reset-password',
        redirectToLinkText: 'Log in'
      });
    });
  });

  //send password reset form
  app.get('/reset-password', function(req, res, next) {
    if (!req.query.access_token) return res.sendStatus(401);

    res.render('form-pass-reset', {
      redirectUrl: '/api/profiles/reset-password?access_token='+req.query.access_token,
      src: path.resolve(__dirname, '../../client/favicon.png')
    });
  });
}
