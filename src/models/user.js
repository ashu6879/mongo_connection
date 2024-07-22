const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  _id: String,
  ID: String,
  display_name: String,
  user_activation_key: String,
  user_email: String,
  user_login: String,
  user_nicename: String,
  user_pass: String,
  user_registered: Date,
  user_status: Number,
  user_url: String
}, {
  collection: 'wp_users' // Explicitly specify the collection name
});

const User = mongoose.model('User', userSchema);

module.exports = User;
