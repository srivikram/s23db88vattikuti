const express = require('express');
const router = express.Router();

const costume_controlers = require('../controllers/costumeController');

const secured = (req, res, next) => {
    if (req.user) {
        return next();
    }
    req.session.returnTo = req.originalUrl;
    res.redirect("/login");
}

/* GET home page. */
router.get('/', costume_controlers.costume_view_all_Page);

/* GET detail handbags page */
router.get('/detail', secured, costume_controlers.costume_view_one_Page);

/* GET create costume page */
router.get('/create', secured, costume_controlers.hats_create_Page);

/* GET create update page */
router.get('/update', secured, costume_controlers.hats_update_Page);

/* GET delete costume page */
router.get('/delete', secured, costume_controlers.costume_delete_Page);

/* GET update handbags page */
router.get('/update',secured, costume_controlers.hats_update_Page);

module.exports = router;