let express = require('express'),
path = require('path'),
app = express(),

// getting port this way
port = process.env.PORT || process.argv[2] || 8080;

// foo
app.use('/foo', require('./routes/foo'));

// start the app
app.listen(port, function () {

    console.log('app is up on port: ' + port);

});
