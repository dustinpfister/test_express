let express = require('express');

// the router
router = module.exports = express.Router();

// just use everything in the public folder for now
router.use('/', express.static('public'));
