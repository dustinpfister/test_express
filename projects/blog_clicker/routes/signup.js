let express = require('express'),

// login router
router = module.exports = express.Router();

// body parser
router.use(require('body-parser').json());

router.get('/signup', function (req, res) {

    res.render('index', {
        layout: 'signup',
		user: false
    });
});

