let express = require('express'),
path = require('path'),
app = express(),
port = process.env.PORT || process.argv[2] || 8080;

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// session cookies
app.use(require('./lib/session'));

// attach /login, and /logout
app.use('/', require('./routes/login'));
app.use('/posts', require('./routes/posts'));

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
        layout: 'word',
        session: req.session || {},
        user: req.user || {}
    });

});

app.listen(port, function () {

    console.log('blog_clicker is up on port: ' + port);

});
