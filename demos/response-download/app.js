let express = require('express'),
port = process.env.PORT || process.argv[2] || 8080,
app = express();

app.get('/', function (req, res) {

    res.send('<a href="/getdoc">get a doc</a>');

});

app.get('/getdoc', function (req, res) {

    res.download('./docs/doc1.txt', function (err) {

        console.log(err);

    });

});

app.listen(port, function () {

    console.log('response-download demo is up on port: ' + port);

});
