// Import the necessary modules
const express = require('express');
const router = express.Router();
const costume_controlers = require('../controllers/costumeController');

// Define a route for the costume detail page
router.get('/detail', costume_controlers.costume_view_one_Page);

// Export the router
module.exports = router;
