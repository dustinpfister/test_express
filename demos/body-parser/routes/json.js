let express = require('express'),
bodyParser = require('body-parser'),

// the router
router = module.exports = express.Router();

// using body parser for req.body
router.use(bodyParser.json());

router.get('/', function (req, res) {

    res.render('index', {

        layout: 'json'

    });

});

// post request
router.post('/', function (req, res) {

    var data = {
        mess: 'yes this is dog.',
        body: req.body
    };

    if (req.body.action) {

        if (req.body.action === 'foo') {

            data.mess = 'bar';

        }

    }

    res.json(data);

});
