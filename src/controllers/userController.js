const User = require('../models/user');

exports.getAllUsers = (req, res) => {
  console.log('Fetching all users'); // Debug log
  User.find({})
    .then(users => {
      console.log('Users found:', users); // Debug log
      if (!users || users.length === 0) {
        console.log('No users found');
        return res.status(404).json({ message: 'No users found' });
      }
      res.json(users);
    })
    .catch(err => {
      console.log('Error fetching users:', err);
      res.status(500).json({ error: err.message });
    });
};
