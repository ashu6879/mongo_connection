const mongoose = require('mongoose');
require('dotenv').config();

const uri = process.env.MONGODB_CONNECTION_STRING;

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('MongoDB connected');
  
  // Test the connection and query the wp_users collection
  const User = mongoose.connection.db.collection('wp_users');
  User.find({}).toArray((err, data) => {
    if (err) {
      console.log('Error fetching users in db.js:', err);
    } else {
      console.log('Users in db.js:', data);
    }
  });
})
.catch(err => console.log('Error connecting to MongoDB:', err));
