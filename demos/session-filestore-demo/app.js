let express = require('express'),
session = require('express-session'),
FileStore = require('session-file-store')(session),

secret = 'notThatSecretSecret',
port = process.env.PORT || process.argv[2] || 8080,
app = express();

//use express-session
app.use(session({

        // using FileStore with express-session
        // as the sore method, replacing the default memory store
        store: new FileStore({

            path: './session-store'

        }),
        name: 'foosite', // cookie will show up as foo site
        secret: secret,
        resave: false,
        saveUninitialized: false,

    }));

// parse cookies, and populate req.cookies
app.use(require('cookie-parser')(secret));

app.get('/', function (req, res) {

    // if count add to it
    if (req.session.count) {

        req.session.count += 1;

    } else {

        // else set it to 1
        req.session.count = 1;

    }

    // send info as json
    res.json({
        cookies: req.cookies,
        session: req.session
    });

});

app.listen(port, function () {

    console.log('express-session demo is up on port: ' + port);

});
