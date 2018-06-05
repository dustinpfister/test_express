low = require('lowdb'),
FileSync = require('lowdb/adapters/FileSync'),

api = module.exports = {},

// users
posts = low(new FileSync('db/posts.json'));

// default for database is a single user named 'stin'
posts.defaults({
    posts: [{
            owner: 0,
            published: new Date(),
            updated: new Date(),
            text: 'This is blog clicker the greatest game ever!',
            likes: 0
        }
    ]
}).write();

// make users db part of the api
api.posts = posts;

// get the posts that are owned by the given user id
api.getOwnedPosts = function (id) {

    return this.posts.get('posts').find({
        owner: id
    });

};
