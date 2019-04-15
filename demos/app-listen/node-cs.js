let http = require('http'),
port = process.env.PORT || process.env[2] || 8080;

// using create server
server = http.createServer(),

// handle requests like this
server.on('request', function (req, res) {
    res.end('hello world');
});

// listen
server.listen(port, function () {
    console.log('server is up on port: ' + port);
});
