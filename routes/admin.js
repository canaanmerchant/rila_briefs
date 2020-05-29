const path = require('path');

const express = require('express');

const briefsController = require('../controllers/briefs');

const router = express.Router();

// /admin/add-brief => GET
router.get('/add-brief', briefsController.getAddBrief);

// /admin/add-brief => POST
router.post('/add-brief', briefsController.postAddBrief);

module.exports = router;
