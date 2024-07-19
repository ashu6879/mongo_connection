const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes');
require('./config/db'); // Connect to MongoDB

app.use(express.json());
app.use('/users', userRoutes);

app.listen(3001, () => {
  console.log('Server running on port 3001');
});
