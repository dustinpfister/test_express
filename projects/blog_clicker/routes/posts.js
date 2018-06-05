let express = require('express'),

router = module.exports = express.Router();

users = require('../lib/users'),
posts = require('../lib/posts');

// just give the whole thing for now
router.get('/posts', function (req, res) {

    res.json(posts.posts.get('posts').value());

});

router.post('/posts', function (req, res) {

    res.json({

        mess: 'this is the post path'

    });

});
