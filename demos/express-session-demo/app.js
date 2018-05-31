let express = require('express'),
session = require('express-session'),

port = process.env.PORT || process.argv[2] || 8080,
app = express();

app.use(session({

        secret: 'foobar',
        resave: false,
        saveUninitialized: false

    }));
app.use(require('cookie-parser')());

app.get('*', function (req, res) {

    res.json({

	    cookies: req.cookies,
        session: req.session

    });

});

app.listen(port, function () {

    console.log('express-session demo is up on port: ' + port);

});
