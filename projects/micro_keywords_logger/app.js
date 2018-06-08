let express = require('express'),
FileSync = require('lowdb/adapters/FileSync'),
low = require('lowdb'),
mkdirp = require('mkdirp'),
port = process.env.PORT || process.argv[2] || 8080,
kw,
app = express();

// using the body-parser json to parse incoming
// post requests with keyword json data
app.use(require('body-parser').json());

// about path
app.get('/about', function (req, res) {

    res.json({

        service_name: 'micro_keywords_logger'

    });

});

// GET requests at /
app.get('/', function (req, res) {

    // just serve up the whole database for now
    res.json(kw.get('keywords').value());

});

// POST incoming keywords
app.post('/', function (req, res) {

    let record = kw.get('keywords').find({
            keyword: req.body.keyword
        });

    if (!record.value()) {

        kw.get('keywords').push({

            keyword: req.body.keyword,
            count: 1

        }).write();

        console.log('new keyword: ' + req.body.keyword);
        console.log('count: ' + 1);

    } else {

        record.value().count += 1;
        kw.write();

        console.log('search for keyword: ' + record.value().keyword);
        console.log('keyword count : ' + record.value().count);

    }

    res.json({
        success: true,
        mess: 'post recived'
    });

});

// make sure db folder is there
mkdirp('db', function () {

    // create keywords.json if it is not there
    kw = low(new FileSync('db/keywords.json'));

    // default to empty keyword array
    kw.defaults({
        keywords: []
    }).write();

    // start service with the value of port
    app.listen(port, function () {

        console.log('micro_keywords_logger is up on port: ' + port);

    });

});
