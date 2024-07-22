const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/', (req, res) => {
  console.log('GET /users endpoint hit'); // Debug log
  userController.getAllUsers(req, res);
});

module.exports = router;
