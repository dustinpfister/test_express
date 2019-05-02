let express = require('express'),
path = require('path'),
fs = require('fs'),
app = express();

app.set('port', process.argv[2] || process.env.PORT || 8080);


// using express static to host the index.html file
app.use('/', express.static('public'));

// using body parser to parse incoming json from
// the client
app.use(require('body-parser').json());

// singe middleware that responds to post requests
app.post('/data', (req, res) => {
    res.json({
        mess: req.body.mess + 'bar'
    });
});

app.listen(app.get('port'), () => console.log('example markdown editor is up on port: ' + app.get('port')));
