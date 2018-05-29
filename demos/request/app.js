let express = require('express'),
path = require('path'),
app = express(),

// getting port this way
port = process.env.PORT || process.argv[2] || 8080;

// using what is in the routes folder
app.use('/', require('./routes/static'));
app.use('/body', require('./routes/body'));
app.use('/headers', require('./routes/headers'));

app.listen(port, function () {

    console.log('request object demo is up on port: ' + port);

});
