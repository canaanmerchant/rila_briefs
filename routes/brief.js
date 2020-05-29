const path = require('path');

const express = require('express');

const briefsController = require('../controllers/briefs');

const router = express.Router();

router.get('/', briefsController.getBriefs);

module.exports = router;
