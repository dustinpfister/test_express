let express = require('express'),
bodyParser = require('body-parser'),

// the router
router = module.exports = express.Router();

router.get('*', function (req, res) {

    res.send('bar');

});
