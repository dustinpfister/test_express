let express = require('express');

router = module.exports = express.Router();

router.use('/js', express.static('public/js'));
router.use('/css', express.static('public/css'));
router.use('/fonts', express.static('public/fonts'));