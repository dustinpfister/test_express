let express = require('express'),
app = express(),

// getting port this way
port = process.env.PORT || process.argv[2] || 8080;

app.get('*', function (req, res) {

    res.send('hello world');

});

app.listen(port, function () {

    console.log('app is up on port: ' + port);

});
