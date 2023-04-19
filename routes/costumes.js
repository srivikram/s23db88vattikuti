const express = require('express');
const router = express.Router();

const Costume = require('../models/costume'); // Import the Costume model
const costume_controlers = require('../controllers/costumeController');

/* GET home page. */
//router.get('/', costumeController.handbags_view_all_Page);

/* GET detail handbags page */
router.get('/detail', costume_controlers.costume_view_one_Page);

/* GET create costume page */
router.get('/create', costume_controlers.hats_create_Page);

/* GET create update page */
router.get('/update', costume_controlers.hats_update_Page);

/* GET delete costume page */
router.get('/delete', costume_controlers.costume_delete_Page);

module.exports = router;