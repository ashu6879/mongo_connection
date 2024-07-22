const express = require('express');
const cors = require('cors'); // Import cors
const app = express();
const userRoutes = require('./src/routes/userRoutes');
require('./src/config/db'); // Connect to MongoDB

// Use CORS middleware
app.use(cors());

// Middleware to parse JSON requests
app.use(express.json());

// Route handling
app.use('/', userRoutes);

// Define the port
const PORT = process.env.PORT || 80; // Use environment variable if available

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
