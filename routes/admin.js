const path = require('path');

const express = require('express');

const briefsController = require('../controllers/briefs');

const router = express.Router();

const isAuth = require('../middleware/is-auth')

// /admin/add-brief => GET
router.get('/add-brief', isAuth, briefsController.getAddBrief);

// /admin/add-brief => POST
router.post('/add-brief', isAuth, briefsController.postAddBrief);

module.exports = router;
