let express = require('express'),
path = require('path'),
app = express(),

// getting port this way
port = process.env.PORT || process.argv[2] || 8080;

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


// all paths
app.use('/', require('./routes/all'));

// static paths
app.use('/', require('./routes/static'));

// pattern paths
app.use('/', require('./routes/patt'));

// start the app
app.listen(port, function () {

    console.log('app is up on port: ' + port);

});
