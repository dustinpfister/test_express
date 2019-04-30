let express = require('express'),
app = express();

// hosting public folder
app.use('/', express.static('public'));

// body parser
app.use(require('body-parser').json());

// singe middleware that responds to post requests
app.post('/data', (req, res) => {
    res.json({
        mess: req.body.mess + 'bar'
    });
});

app.listen(8080);
