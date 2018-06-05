let express = require('express'),

router = module.exports = express.Router();

users = require('../lib/users'),
posts = require('../lib/posts');

// get hard coded demo posts in the database at /db/posts.json
router.get('/', function (req, res) {

    let userPosts = posts.getOwnedPosts(req.user.id);

    console.log(userPosts.value());

    res.render('index', {
        layout: 'home',
        session: req.session || {},
        user: req.user || {}
    });

});
