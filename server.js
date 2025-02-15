const express = require('express'); // Import express
const app = express(); // Initialize express
const User = require('./models/userModel');

const bodyParser = require('body-parser');

const swaggerSetup = require('./swagger'); // Import swagger setup promise

const passport = require('passport');
const session = require('express-session');
const GitHubStrategy = require('passport-github2').Strategy;

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const port = process.env.PORT || 3000; // Port number
//app.use('/', routes)

// DATA
const models = require('./models');
const utils = require('./utils');

async function startServer() {
  try {
    await swaggerSetup; // Wait for swagger setup to complete
    models.db.mongoose
      .connect(utils.url, {})
      .then(() => {
        console.log('Mongoose connected through MongoDB!');
      })
      .catch((err) => {
        console.error('Cannot connect to Mongodb', err);
      });

    passport.use(
      new GitHubStrategy(
        {
          clientID: process.env.GITHUB_CLIENT_ID,
          clientSecret: process.env.GITHUB_CLIENT_SECRET,
          callbackURL: process.env.GITHUB_CLIENT_CALLBACKURL,
        },
        async function (accessToken, refreshToken, profile, done) {
          var user = await User.findOne({ UserName: profile.username });
          if (!user) {
            user = new User({
              Email: `${profile.username}@github.com`,
              FirstName: profile.displayName,
              LastName: profile.displayName,
              UserName: profile.username,
              AccountType: 'admin',
              PhoneNumber: '8005551212',
            });
            user.save();
          }
          return done(null, profile);
        },
      ),
    );
    passport.serializeUser((user, done) => {
      done(null, user);
    });
    passport.deserializeUser((user, done) => {
      done(null, user);
    });

    // APP
    app
      .use(bodyParser.json())
      .use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))
      .use(
        session({
          secret: 'ThisisaSecretandshouldBeIntheENVFile',
          resave: false,
          saveUninitialized: true,
        }),
      )
      .use(passport.initialize())
      .use(passport.session())
      .use('/', require('./routes'))
      .get('/', (req, res) => {
        res.send(
          req.session.user !== undefined
            ? `Logged in as user ${req.session.user.displayName || req.session.user.username}`
            : 'Logged Out',
        );
      })
      .get(
        '/github/callback',
        passport.authenticate('github', {
          failureRedirect: '/api-docs',
          session: false,
        }),
        (req, res) => {
          req.session.user = req.user;
          res.redirect('/');
        },
      )
      .listen(port, () => {
        console.log(`Server is running on port ${port}`);
      });
  } catch (err) {
    console.error('Failed to start server', err);
  }
}

startServer();
