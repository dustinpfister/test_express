let express = require('express'),
bodyParser = require('body-parser'),
path = require('path'),
app = express(),

// getting port this way
port = process.env.PORT || process.argv[2] || 8080;

// for req.body
app.use(bodyParser.json());

app.use('/', express.static('public'));

app.post('/req', function (req, res) {

    console.log(req.body); // the body

    var data = {
        mess: 'what?'
    };

    if (req.body) {

        if (req.body.action === 'foo') {

            data.mess = 'bar'

        }

    }

    res.json(data);

});

app.listen(port, function () {

    console.log('request object demo is up on port: ' + port);

});
