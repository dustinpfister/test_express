let express = require('express'),

app = express();

// find out the port to listen on
app.set('port', process.argv[2] || process.env.PORT || 8080);

// serve a static client
app.use('/', express.static('public'));

app.use(require('./routes/post.js'));

// start listening
app.listen(app.get('port'), function () {

    console.log('the demo is up on port: ' + app.get('port'));

});
