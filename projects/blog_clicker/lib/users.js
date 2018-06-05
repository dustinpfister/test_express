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

// find a user by username
api.findUserByName = function (username) {

    console.log('this is the findUserByName method');
	console.log(username);

	let user = this.users.get('users').find({
        username: username
    });
	
	console.log(user.value());
	console.log('**********');
	
    return user;

};

// find a user by user id
api.findUserById = function (id) {

    return this.users.get('users').find({
        id: id
    });

};

// get user count
api.getUserCount = function () {

    return this.users.get('users').value().length;

};

api.addUser = function (userObj) {

    userObj.id = this.getUserCount();

    // add, and write user
    this.users.get('users').push(userObj).write();

    return userObj;
};
