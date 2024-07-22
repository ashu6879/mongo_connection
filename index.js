const express = require('express');
const app = express();
const userRoutes = require('./src/routes/userRoutes');
require('./src/config/db'); // Connect to MongoDB

app.use(express.json());
app.use('/', userRoutes);

app.listen(80, () => {
  console.log('Server running on port 80');
});
