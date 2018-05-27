let express = require('express');

// the router
router = module.exports = express.Router();

// a static js path in public
router.use('/js', express.static('public/js'));
