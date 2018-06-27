let express = require('express'),
fs = require('fs'),
app = express();

app.use([

        // get a and b, from query string
        // or default to 0
        function (req, res, next) {

            req.a = req.query.a || 0;
            req.b = req.query.b || 0;

            next();

        },

        // add a + b
        function (req, res, next) {

            req.n = Number(req.a) + Number(req.b);

            next();

        }

    ]);

app.get('/', function (req, res) {

    res.json({

        a: req.a,
        b: req.b,
        n: req.n

    });

});

app.listen(8080);
