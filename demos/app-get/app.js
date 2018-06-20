let express = require('express'),

app = express();

// set the port to listen on with app.set
app.set('port', process.env.PORT || process.argv[2] || 8080);

// use app.get to get the value of port
console.log(app.get('port'));

// the full list of settings is at app.locals
console.log(app.locals.settings.port);


// get the value of port with app.get, and also
// set what to do with get requests with app.get
app.get('/', function (req, res) {

    res.send('The value of port is: ' + app.get('port'));

});

// listen on the port set with app.set
app.listen(app.get('port'), function () {

    console.log('demo is up on port: ' + app.get('port'));

});
