let express = require('express'),
app = express(),
port = process.env.PORT || process.argv[2] || 8080;

// check for cookies
app.use(require('cookie-parser')());

app.get('/', function (req, res) {

    res.send(JSON.stringify(req.cookies));

});

app.listen(port, function () {

    console.log('cookie-parser demo is up on port: ' + port);

});
