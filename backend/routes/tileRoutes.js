const express = require('express');
const router = express.Router();
const tileController = require('../controllers/tileController');

router.route('/tiles').post(tileController.findTile);

module.exports = router;
