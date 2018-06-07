let express = require('express'),
FileSync = require('lowdb/adapters/FileSync'),
low = require('lowdb'),
mkdirp = require('mkdirp'),
port = process.env.PORT || process.argv[2] || 8080,
kw,
app = express();

app.get('/', function (req, res) {

    res.json(kw.get('keywords').value());

});

mkdirp('db', function () {

    kw = low(new FileSync('db/keywords.json'));

    // default to empty keyword array
    kw.defaults({
        keywords: []
    }).write();

    app.listen(port, function () {

        console.log('micro_keywords_logger is up on port: ' + port);

    });

});
