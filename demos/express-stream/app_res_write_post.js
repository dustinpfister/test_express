let express = require('express'),
fs = require('fs'),
app = express(),
file = process.argv[2] || 'package.json',
port = process.argv[3] || 8080;

app.use(express.static('./public'));

app.post('/', (req, res) => {


    fs.stat(file, (e,stat) => {

        res.writeHead(200, {
            'Content-Length': stat.size,
            'Content-Type': 'text/plain'
        });

        let reader = fs.createReadStream(file);

        reader.on('close', () => {
            res.end();
        });

        reader.pipe(res);

    });

});

app.listen(port, () => {
    console.log('app is up on port ' + port);
});
