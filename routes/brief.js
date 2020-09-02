const path = require('path');

const express = require('express');

const briefsController = require('../controllers/briefs');

const isAuth = require('../middleware/is-auth');

const router = express.Router();

router.get('/', isAuth, briefsController.getBriefs);



module.exports = router;
