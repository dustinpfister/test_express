let express = require('express'),
fs = require('fs'),
path = require('path'),
app = express();

app.set('port', process.argv[2] || process.env.PORT || 8080);

// get requests to root (/)
app.get('/', (req, res, next) => {
    fs.readdir(process.cwd(), (e, files) => {
        if (e) {
            // if error
            next(e);
        } else {
            // send index of CWD
            let html = '';
            files.forEach((file) => {
                html += '<p><a href=\"/' + file + '\">' + file + '<\/a><\/p>'
            });
            res.set('Content-Type', 'text/html');
            res.send(html);
        }
    });
});

// all other get requests
app.get('*', (req, res, next) => {
    fs.readFile(path.join(process.cwd(), req.path), 'utf8', (e, text) => {
        if (e) {
            // if error
            next(e);
        } else {
            // else send file as text
            res.set('Content-Type', 'text/plain');
            res.send(text);
        }
    });
});

// Error / 400 handler
app.use([

        (err, req, res, next) => {
            if (err) {
                res.status(500).send(err.message || 'Internal Server Error');
            } else {
                next();
            }
        },

        (req, res) => {
            res.status(400).send('Bad request');
        }

    ]);

app.listen(app.get('port'), () => console.log('app is up on port: ' + app.get('port')));
