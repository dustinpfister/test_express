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

    // response object to respond with
    let resObj = {
        success: true,
        mess: '.',
        data: {}
    },

    // the keyword
    keyword = req.body.keyword,

    // the count of that keyword
    count = 1,

    // get the record for the given keyword
    record = kw.get('keywords').find({
            keyword: keyword
        });

    // get or update the count of the keyword
    if (!record.value()) {

        // write a new record
        kw.get('keywords').push({

            keyword: keyword,
            count: 1

        }).write();

    } else {

        // add to an existing record
        count = record.value().count += 1;
        kw.write();

    }

    // set the keyword, and count for the response object
    resObj.data.keyword = keyword;
    resObj.data.count = count;

    res.json(resObj);

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
