let express = require('express'),
session = require('express-session'),

port = process.env.PORT || process.argv[2] || 8080,
app = express();

app.use(session({

        name: 'foosite',
        secret: 'notThatSecretSecret',
        resave: false,
        saveUninitialized: false,
        cookie: {
            maxAge: 10000
        }

    }));
app.use(require('cookie-parser')());

app.get('/', function (req, res) {

    if (req.session.count) {

        req.session.count += 1;

    } else {

        req.session.count = 1;

    }

    res.json({

        cookies: req.cookies,
        session: req.session

    });

});

app.listen(port, function () {

    console.log('express-session demo is up on port: ' + port);

});
