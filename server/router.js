const router = require('express').Router();
const dbController = require('./db/dbController');
const controller = require('./controller');

// CREATE
router.post('/booking', controller.createBooking);
router.post('/bnb', controller.createBnb);

// READ ALL
router.get('/booking', controller.findAllBooking);
router.get('/bnb', controller.findAllBnb);

// READ ONE

// UPDATE

// DELETE

// SEARCH


module.exports = router;