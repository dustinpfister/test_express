let express = require('express'),

router = module.exports = express.Router();

users = require('../lib/users'),
posts = require('../lib/posts');

router.post('/posts', function (req, res) {

    res.json({

        mess: 'this is the post path'

    });

});

