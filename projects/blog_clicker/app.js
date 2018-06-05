let express = require('express'),
path = require('path'),
app = express(),
port = process.env.PORT || process.argv[2] || 8080;

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// session
app.use(require('./lib/session')); // session cookies

// public routes
app.use('/', require('./routes/static')); // static path for /js, /css, and /fonts
app.use('/', require('./routes/signup')); // attach /signup
app.use('/', require('./routes/demos')); // attach /demos, and /demos/get-demos
app.use('/', require('./routes/login')); // attach /login, and /logout
app.use(require('./lib/check-for-user')); // check for user login

// login routes
app.use('/', require('./routes/word')); // attach /word
app.use('/', require('./routes/posts')); // attach /posts
app.use('/', require('./routes/home')); // home
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
