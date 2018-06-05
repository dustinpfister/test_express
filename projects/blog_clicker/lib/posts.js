low = require('lowdb'),
FileSync = require('lowdb/adapters/FileSync'),

api = module.exports = {},

// users
posts = low(new FileSync('db/posts.json'));

// default for database is a single user named 'stin'
posts.defaults({
    users: [{
            owner: 0,
            text: 'This is blog clicker the greatest game ever!',
            likes: 0
        }
    ]
}).write();

// make users db part of the api
api.posts = posts;


