let express = require('express'),
FileSync = require('lowdb/adapters/FileSync'),
low = require('lowdb'),
mkdirp = require('mkdirp'),
port = process.env.PORT || process.argv[2] || 8080,
postDemos,
postUsers,
app = express();

app.get('/', function (req, res) {

    // just send the whole demo database for now
    res.send(postDemos.get('posts').value());

});

// make sure db folder is there
mkdirp('db', function () {

    // get database files
    postDemos = low(new FileSync('db/posts_demos.json'));
    postUsers = low(new FileSync('db/posts_users.json'));

    // set defaults for database files
    postDemos.defaults({
        posts: [{

                id: 0,
                created: new Date(),
                updated: new Date(),
                title: 'Welcome to Blogger Idle',
                text: 'Please write more demo posts.'

            }
        ]
    }).write();
    postUsers.defaults({
        posts: []
    }).write();

    // listen on set port
    app.listen(port, function () {

        console.log('keywords_posts service is up on port: ' + port);

    });

});
