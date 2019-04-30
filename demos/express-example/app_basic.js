let express = require('express'),
app = express();

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

app.listen(8080);
