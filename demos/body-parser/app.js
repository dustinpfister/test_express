let express = require('express'),
path = require('path'),
app = express(),

// getting port this way
port = process.env.PORT || process.argv[2] || 8080;

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// using what is in the routes folder
app.use('/', require('./routes/static'));
app.use('/json', require('./routes/json'));
app.use('/text', require('./routes/text'));

app.get('/', function (req, res) {

    res.render('index', {});

});

app.listen(port, function () {

    console.log('request object demo is up on port: ' + port);

});
