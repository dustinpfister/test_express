let express = require('express'),
app = express(),
port = process.env.PORT || process.argv[2] || 8080;

app.use(require('./routes/cookie'));

app.get('/', function (req, res) {

    if (req.cookies._mc) {

        res.send(JSON.stringify(req.cookies));

    } else {

        res.send('cookie not set!');

    }

});

app.listen(port, function () {

    console.log('cookie-parser demo is up on port: ' + port);

});
