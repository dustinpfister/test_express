let express = require('express'),
bodyParser = require('body-parser'),
util = require('util'),

// the router
router = module.exports = express.Router();

// using body parser for req.body
router.use(bodyParser.json());

// add body path
router.get('/', function (req, res) {

    res.json({

        headers: req.headers,
        userAgent: req.get('user-agent')

    });

});
