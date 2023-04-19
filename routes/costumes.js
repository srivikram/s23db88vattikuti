const express = require('express');
const router = express.Router();

const Costume = require('../models/costume'); // Import the Costume model
const costume_controlers = require('../controllers/costumeController');

/* GET home page. */
//router.get('/', costumeController.handbags_view_all_Page);

/* GET detail handbags page */
router.get('/detail', costume_controlers.costume_view_one_Page);

module.exports = router;