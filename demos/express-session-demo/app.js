let express = require('express'),

port = process.env.PORT || process.argv[2] || 8080,
app = express();

app.use(require('express-session')({

        name: '_es_demo',
        secret: '1234',
        resave: false,
        saveUninitialized: false,

    }));

app.get('/', function (req, res) {

    // simple count for the session
    if (!req.session.count) {
        req.session.count = 0;
    }
    req.session.count += 1;

    res.json(req.session);

});

app.listen(port, function () {

    console.log('express-session demo is up on port: ' + port);

});
