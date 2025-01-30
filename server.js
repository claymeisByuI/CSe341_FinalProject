const express = require('express'); // Import express
const app = express(); // Initialize express

const port = process.env.PORT || 3000; // Port number
app.use(bodyParser.json());
app.use('/', routes);
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

