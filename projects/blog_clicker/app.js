let express = require('express'),
path = require('path'),
app = express(),
port = process.env.PORT || process.argv[2] || 8080;

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// session cookies
app.use(require('./lib/session'));

// static path for /js, /css, and /fonts
app.use('/', require('./routes/static'));

// attach /login, and /logout, and signup
app.use('/', require('./routes/login'));
app.use('/', require('./routes/signup'));

// attach /word, /demos, and /demos/get-demos
app.use('/', require('./routes/word'));
app.use('/', require('./routes/demos'));

// attach /
app.use('/', require('./routes/home'));
/*
app.get('/',

    function (req, res, next) {

    // redirect to login if no user
    if (!req.user) {

        res.redirect('/login');

    } else {

        next();

    }

},

    function (req, res) {

    res.render('index', {
        layout: 'home',
        session: req.session || {},
        user: req.user || {}
    });

});
*/

app.listen(port, function () {

    console.log('blog_clicker is up on port: ' + port);

});
