let express = require('express'),

port = process.env.PORT || process.argv[2] || 8080,

app = express();

app.all('*', function (req, res, next) {

    console.log(req.method);

    next();

});

app.use('/', express.static('public'));

app.all('*', function (req, res) {

    res.send('404');

});

app.listen(port, function () {

    console.log('app.all demo is up on port: ' + port);

});
