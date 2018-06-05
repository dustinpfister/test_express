let express = require('express'),

passport = require('passport'),
LocalStrategy = require('passport-local').Strategy,

// using /lib/users.js to work with /db/users.json
users = require('../lib/users'),

secret = 'eeeek',

// temp hard coded user
/*
user = {

username: 'stin',
password: '123',
id: 0

},
 */

// login router
router = module.exports = express.Router();

// body parser
router.use(require('body-parser').urlencoded({
        extended: true // must give a value for extended
    }));

// using the local strategy with passport
passport.use(

    // calling the constructor given by passport-local
    new LocalStrategy(

        // options for passport local
    {

        // using custom field names
        usernameField: 'user',
        passwordField: 'pass'

    },

        // login method
        function (username, password, cb) {

        let user = users.findUserByName(username).value();

        if (!user) {

            return cb(null, false);

        }

        if (username === user.username && password.toString() === user.password) {

            return cb(null, user);

        }

        // null and false for all other cases
        return cb(null, false);

    }));

passport.serializeUser(function (user, cb) {
    cb(null, user.id);
});
passport.deserializeUser(function (id, cb) {

    let user = users.findUserById(id).value();

    cb(null, user);
});

router.use(passport.initialize());
router.use(passport.session());

router.get('/login', function (req, res) {

    // render index with login layout
    res.render('index', {
        layout: 'login',
        user: false
    });
});

router.post('/login',

    // just a simple find user method that logs to the console
    function (req, res, next) {

    let user = users.findUserByName(req.body.user).value();

    if (user) {

        console.log(user);

    } else {

        console.log('user: ' + req.body.user + ' not found.');

    }

    next();

},

    passport.authenticate('local', {
        // redirect back to /login
        // if login fails
        failureRedirect: '/login'
    }),

    function (req, res) {

    res.redirect('/');

});

router.get('/logout', function (req, res) {

    if (req.user) {

        req.logout();

    }
    res.redirect('/login');

});
