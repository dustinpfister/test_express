let express = require('express'),
bodyParser = require('body-parser'),

// the router
router = module.exports = express.Router();

// using body parser for req.body
//router.use(bodyParser.json());
router.use(bodyParser.text());

// add body path
router.post('/', function (req, res) {

    var data = {
        mess: 'what?'
    };

    console.log(req.body);

    if (req.body) {

        if (req.body.action === 'foo') {

            data.mess = 'bar';

        }

        if (req.body.action === 'answer') {

            data.mess = '42';

        }

    }

    res.json(data);

});
