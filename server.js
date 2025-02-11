const express = require('express'); // Import express
const app = express(); // Initialize express

const bodyParser = require('body-parser');

const swaggerSetup = require('./swagger'); // Import swagger setup promise

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
      .then(() => {console.log('Mongoose connected through MongoDB!');})
      .catch((err) => {
        console.error('Cannot connect to Mongodb', err);
      });

    // APP
    app
      .use(bodyParser.json())
      .use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))
      .use('/', require('./routes'))
      .listen(port, () => {
        console.log(`Server is running on port ${port}`);
      });
  } catch (err) {
    console.error('Failed to start server', err);
  }
}

startServer();
