const swaggerAutogen = require('swagger-autogen')({ openapi: '3.0.0' });
const doc = {
  openapi: '3.0.0',
  info: {
    title: 'Commercial Vehicle Information Database',
    description: 'Commercial Vehicle Information Database',
  },
  servers: [
    {
      url: 'http://localhost:8080',
      description: 'Local development server',
    },
    {
      url: 'https://cse-341-final-project-2g2g.onrender.com',
      description: 'render server',
    },
  ],
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

// todo:  This needs to be awaited so the running server is getting the latest swagger.json file and not
//  one when the server started
// generate swagger.json
swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
  console.log('Generated swagger file');
});
