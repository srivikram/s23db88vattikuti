const express = require('express');
const router = express.Router();

const Costume = require('../models/costume'); // Import the Costume model

// Middleware function for handling costume view all page
router.get('/', async function (req, res, next) {
    try {
        const theCostumes = await Costume.find();
        res.render('costumes', { title: 'Costume Search Results', results: theCostumes });
    }
    catch (err) {
        next(err); // Pass the error to the error handler middleware
    }
});

module.exports = router;