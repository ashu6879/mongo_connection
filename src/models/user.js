const mongoose = require('mongoose');

// Define schema for user
const userSchema = new mongoose.Schema({
  _id: { type: String, required: true },
  ID: { type: String, required: true },
  display_name: { type: String, required: true },
  user_activation_key: String,
  user_email: { type: String, required: true, unique: true },
  user_login: { type: String, required: true, unique: true },
  user_nicename: String,
  user_pass: { type: String, required: true },
  user_registered: { type: Date, default: Date.now },
  user_status: { type: Number, default: 0 },
  user_url: String
}, {
  collection: 'wp_users' // Explicitly specify the collection name
});

// Create the User model
const User = mongoose.model('User', userSchema);

module.exports = User;
