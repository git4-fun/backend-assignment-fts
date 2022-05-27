const express = require('express');
const router = express.Router();
const getBook = require("../controllers/getBook")
const getRatingStatus = require("../controllers/getRatingStatus")
const addRating = require('../controllers/addRating');


router.get('/book/:title', getBook);
router.get('/ratingStatus/:username/:book', getRatingStatus);
router.post('/rating/:username/:book/:rate', addRating);

module.exports = router;