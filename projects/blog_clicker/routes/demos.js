let express = require('express'),
low = require('lowdb'),
FileSync = require('lowdb/adapters/FileSync'),
//adapter = new FileSync('db/posts.json'),

// post demos
posts = low(new FileSync('db/demo-posts.json'));

// defaults to empty array
// posts should be added in manually
// @ /db/posts.js
posts.defaults({
    posts: [
        /*{
        text: 'There should be a database of demo posts at /db/posts.json'
        }
         */
    ]
});

router = module.exports = express.Router();

router.post('/demos', function (req, res) {

    res.json({

        mess: 'hello there'

    });

});

// get hard coded demo posts in the database at /db/posts.json
router.post('/demos/get-demos', function (req, res) {

    // just a single post for now that is always post #0
    let post = posts.get('posts').find({
            id: '0'
        }).value();

    res.json(post);

});
