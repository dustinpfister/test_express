let express = require('express'),
path = require('path'),
port = 8080,
app = express();

app.get('/', function (req, res) {

    let p = path.join(__dirname, 'img/face1.png');

    // send a png file
    res.sendFile(p);

});

app.listen(port, function () {

    console.log('send file demo is up on port: ' + port);

});
