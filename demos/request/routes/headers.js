let express = require('express'),

// the router
router = module.exports = express.Router();

// add body path
router.get('/', function (req, res) {

    res.json({

        headers: req.headers,
        userAgent: req.get('user-agent')

    });

});
