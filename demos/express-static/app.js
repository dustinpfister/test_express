let express = require('express'),
path = require('path'),
app = express(),

// getting port this way
port = process.env.PORT || process.argv[2] || 8080;

app.use('/', express.static('public'));

app.listen(port, function () {

    console.log('app up on port: ' + port);

});
