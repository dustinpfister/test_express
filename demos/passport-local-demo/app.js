let express = require('express'),
passport = require('passport'),
Strategy = require('passport-local').Strategy,

user = {
    username: 'foo',
    id: 0,
    password: '123'
},

port = process.env.PORT || process.argv[2] || 8080,
app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(require('body-parser').urlencoded({
        extended: true
    }));
app.use(require('express-session')({
        secret: 'keyboard cat',
        resave: false,
        saveUninitialized: false
    }));

passport.use(new Strategy(function (username, password, cb) {

        console.log('okay that is a start');

        if (password.toString().toLowerCase() === user.password) {
            return cb(null, user);

        }

        // null and false for all other cases
        return cb(null, false);

    }));

passport.serializeUser(function (user, cb) {
    cb(null, user.id);
});

passport.deserializeUser(function (id, cb) {

    cb(null,user);

});

app.use(passport.initialize());
app.use(passport.session());

app.get('/', function (req, res) {

        res.render('index',{layout:'home',user: req.user});

});

app.get('/login',
    function (req, res) {
    res.render('index',{layout:'login',user: req.user});
});

app.post('/login',
    passport.authenticate('local', {
        failureRedirect: '/login'
    }),
    function (req, res) {
    res.redirect('/');
});

app.get('/logout',
    function (req, res) {
    req.logout();
    res.redirect('/');
});

app.listen(port, function () {

    console.log('passport-local demo up on port: ' + port);

});
