let express = require('express'),
path = require('path'),
app = express(),

// getting port this way
port = process.env.PORT || process.argv[2] || 8080;

// view engine setup
//app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'ejs');

app.use('/', express.static('public'));

app.post('/req', function (req, res) {

    res.send('bar');

});

app.listen(port, function () {

    console.log('request object demo is up on port: ' + port);

});
