const User = require('../models/user'); // Import your User model

// Controller function to handle GET request to fetch all users
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

// Controller function to handle POST request to create a new user
exports.createUser = (req, res) => {
  console.log('Creating a new user'); // Debug log
  const userData = req.body; // Get data from the request body
  const newUser = new User(userData); // Create a new User instance

  newUser.save()
    .then(user => {
      console.log('User created:', user); // Debug log
      res.status(201).json(user); // Send back the created user as a response
    })
    .catch(err => {
      console.log('Error creating user:', err);
      res.status(400).json({ error: err.message });
    });
};
