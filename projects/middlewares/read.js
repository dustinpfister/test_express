let express = require('express'),
fs = require('fs'),
app = express();

app.use(function (req, res, next) {

    req.pack = {};
    fs.readFile('package.json', 'utf8', function (e, json) {

        if (e) {

            next();

        } else {

            req.pack = JSON.parse(json);
            next();

        }

    });

});

app.get('/', function (req, res) {

    res.json(req.pack);

});

app.listen(8080);
