low = require('lowdb'),
FileSync = require('lowdb/adapters/FileSync'),

api = module.exports = {},

// users
users = low(new FileSync('db/users.json'));

// default for database is a single user named 'stin'
users.defaults({
    users: [{
            id: 0,
            username: 'stin',
            password: '321'
        }
    ]
}).write();

// make users db part of the api
api.users = users;

api.findUserByName = function (username) {

    return this.users.get('users').find({
        username: username
    });

};

api.findUserById = function (id) {

    return this.users.get('users').find({
        id: id
    });

};
