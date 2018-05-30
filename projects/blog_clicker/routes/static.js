let express = require('express');

router = module.exports = express.Router();

router.use('/', express.static('public'));