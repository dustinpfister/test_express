let express = require('express'),
fs = require('fs'),
app = express(),
// The port to listen on
port = process.argv[3] || 8080,
// the file to send
file = process.argv[2] || 'file.txt',
// options for the readStream
readStreamOptions = {
    highWaterMark: 16
};
// serving an index.html, and a client.js file
// in a public folder with express static
app.use(express.static('./public'));
// GET requests for a file path
app.get('/file', (req, res) => {
    // get file stats
    fs.stat(file, (e, stat) => {
        // if error send 500
        if (e) {
            res.writeHead(500);
            res.send(e.message);
        } else {
            // else write status 200
            // and set content length to stat.size
            // so that the on progress xhr event knows
            // how much data is coming
            res.writeHead(200, {
                'Content-Length': stat.size,
                'Content-Type': 'text/plain'
            });
            // stream the file
            let reader = fs.createReadStream(file, readStreamOptions);
            // end the response on close stream event
            reader.on('close', () => {
                res.end();
            });
            // write to response on each data event
            reader.on('data', (data) => {
                res.write(data);
            });
        }
    });
});
// listen
app.listen(port, () => {
    console.log('app is up on port ' + port);
});
