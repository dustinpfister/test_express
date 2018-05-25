let express = require('express'),
path = require('path'),
app = express(),

// getting port this way
port = process.env.PORT || process.argv[2] || 8080;

// basic use
//app.use('/', express.static('public'));

// extensions
// app.use('/', express.static('public',{extensions: ['htm', 'html']}));

// index
app.use('/', express.static('public',{index:'other.html'}));

app.listen(port, function () {

    console.log('app up on port: ' + port);

});
