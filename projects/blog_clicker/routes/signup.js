let express = require('express'),

// login router
router = module.exports = express.Router();

// using /lib/users.js to work with /db/users.json
users = require('../lib/users'),

// body parser
router.use(require('body-parser').urlencoded({
        extended: true // must give a value for extended
    }));

router.get('/signup', function (req, res) {

    res.render('index', {
        layout: 'signup',
        user: false
    });
});

router.post('/signup',

    // check for username
    function (req, res,next) {

    let user = users.findUserByName(req.body.user).value();

    if (user) {

        res.send('username: ' + user.username + ' is taken.');

    } else {

        next();

    }

},

    // make account
    function (req,res) {

	console.log(req.body);
	
    users.addUser(req.body);

    res.redirect('/login');

});
