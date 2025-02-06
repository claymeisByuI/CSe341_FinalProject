const express = require('express'); // Import express
const app = express(); // Initialize express

require('./swagger');

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const port = process.env.PORT || 3000; // Port number
//app.use('/', routes);
app
  .use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))
  .use('/', require('./routes'))
  .listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
