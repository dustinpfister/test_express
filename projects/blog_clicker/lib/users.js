low = require('lowdb'),
FileSync = require('lowdb/adapters/FileSync'),

api = module.exports = {},

// users
users = low(new FileSync('db/users.json'));

users.defaults({
    users: [{
            id: 0,
            username: 'stin',
            password: '321'
        }
    ]
}).write();

api.users = users;

api.findUserByName = function (username) {

    return users.find({
            username: username
        });

};
