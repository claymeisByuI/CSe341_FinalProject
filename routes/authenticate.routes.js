const express = require('express');
const router = express.Router();
const passport = require('passport');

router.use('/login', passport.authenticate('github'), (req, res, next) => {
  /*
        #swagger.tags = ['Authentication']
        #swagger.summary = 'Login'
        #swagger.responses[201] = { description: 'The task was successfully created.'}
        #swagger.responses[400] = { description: 'Invalid input' }
        #swagger.responses[500] = { description: 'Server error' }
      */
  next();
});

router.get('/logout', function (req, res, next) {
  /*
      #swagger.tags = ['Authentication']
      #swagger.summary = 'Logout'
      #swagger.responses[201] = {
        description: 'The task was successfully created.',
        content: {
          "application/json": {
            schema: { $ref: "#/components/schemas/Task" }
          }
        }
      }
      #swagger.responses[400] = { description: 'Invalid input' }
      #swagger.responses[500] = { description: 'Server error' }
    */
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.redirect('/');
  });
});

module.exports = router;
