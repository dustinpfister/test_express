let express = require('express'),
fs = require('fs'),
app = express(),

// The port to listen on
port = process.argv[3] || 8080,

// the file to send
file = process.argv[2] || 'file.txt',

// options for the readStream
readStreamOptions = {
    highWaterMark: 256
};

// serving an index.js file
app.use(express.static('./public'));

app.post('/', (req, res) => {

    fs.stat(file, (e, stat) => {

        res.writeHead(200, {
            'Content-Length': stat.size,
            'Content-Type': 'text/plain'
        });

        let reader = fs.createReadStream(file, readStreamOptions);

        reader.on('close', () => {
            res.end();
        });

        reader.on('data', (data) => {

            console.log(data.length);

            res.write(data);

        });

        //reader.pipe(res);

    });

});

app.listen(port, () => {
    console.log('app is up on port ' + port);
});
