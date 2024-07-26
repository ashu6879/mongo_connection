const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// GET route to fetch all users
router.get('/', (req, res) => {
  console.log('GET /users endpoint hit'); // Debug log
  userController.getAllUsers(req, res);
});

// POST route to create a new user
router.post('/users', (req, res) => {
  console.log('POST /users endpoint hit'); // Debug log
  userController.createUser(req, res);
});

module.exports = router;
