var express = require('express');
var router = express.Router();

const hotelsController = require("../controllers/hotelsController");

/* GET users */
router.get('/', hotelsController.getHotels);

module.exports = router;
