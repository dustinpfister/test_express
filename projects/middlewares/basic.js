let express = require('express'),

app = express();

app.use(function (req, res, next) {

    console.log('this is a middleware!');

    // populating something  on req
    req.obj = {

        platform: process.platform,
		arch : process.arch

    };

    // call next to continue
    next();

});

app.get('/', function (req, res) {

    res.json(req.obj);

});

app.listen(8080);
