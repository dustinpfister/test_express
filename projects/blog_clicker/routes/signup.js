let express = require('express'),

// login router
router = module.exports = express.Router();

// using /lib/users.js to work with /db/users.json
users = require('../lib/users'),

// body parser
router.use(require('body-parser').json());

router.get('/signup', function (req, res) {

    res.render('index', {
        layout: 'signup',
        user: false
    });
});

router.post('/signup',

    // check username
    function (req, res) {

    let user = users.findUserByName(req.body.user).value();

    if (user) {

        res.send('username: ' + user.username + ' is taken.');

    } else {

        res.send('okay you can have that.');

    }

});
