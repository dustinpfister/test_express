let express = require('express'),
path = require('path'),
app = express(),
port = process.env.PORT || process.argv[2] || 8080;

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// session cookies
app.use(require('./lib/session'));

// attach /login, and /logout, and signup
app.use('/', require('./routes/login'));
app.use('/', require('./routes/signup'));

// attach /word, /posts, and /get-demos
app.use('/', require('./routes/word'));
app.use('/', require('./routes/posts'));

// static path for /js, /css, and /fonts
app.use('/', require('./routes/static'));

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

app.listen(port, function () {

    console.log('blog_clicker is up on port: ' + port);

});
