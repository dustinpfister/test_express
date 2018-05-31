let express = require('express'),
low = require('lowdb'),
FileSync = require('lowdb/adapters/FileSync'),
//adapter = new FileSync('db/posts.json'),

// post demos
posts = low(new FileSync('db/posts.json'));

// defaults to empty array
// posts should be added in manually
// @ /db/posts.js
posts.defaults({ posts: [
/*
    {
        text: 'There should be a database of demo posts at /db/posts.json'
    }
*/
]});

router = module.exports = express.Router();

router.post('/', function (req, res) {

    res.json({

        mess: 'hello there'

    });

});

router.post('/get-demos', function (req, res) {

    console.log(posts.get('posts').find({id:'0'}).value());

    res.json({

        mess: 'this is all I have'

    });

});