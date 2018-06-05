let express = require('express'),

port = process.env.PORT || process.argv[2] || 8080,

app = express();

// log info about ALL requests to ALL paths
app.all('*', function (req, res, next) {

    console.log('*** A request ***');
    console.log('method: ' + req.method);
    console.log('url: ' + req.url);
    console.log('*****************');

    next();

});

// host some static assets in a public folder
app.use('/', express.static('public'));

// What to do for ALL requests for ALL Paths 
// that are not handled above
app.all('*', function (req, res) {

    console.log('*** 404 ***');
    console.log('404 for url: ' + req.url);
    console.log('***********');

    res.send('404');

});

app.listen(port, function () {

    console.log('app.all demo is up on port: ' + port);

});
