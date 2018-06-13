let express = require('express'),
path = require('path'),
port = 8080,
app = express();

app.get('/', function (req, res) {

    // send a png file via relative path
    res.sendFile('face1.png', {

        root: './img'

    });

});

app.listen(port, function () {

    console.log('send file demo is up on port: ' + port);

});
