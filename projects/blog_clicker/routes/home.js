let express = require('express'),

router = module.exports = express.Router();

// get hard coded demo posts in the database at /db/posts.json
router.get('/', function (req, res) {

    res.render('index', {
        layout: 'home',
        session: req.session || {},
        user: req.user || {}
    });

});
