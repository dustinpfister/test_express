let express = require('express'),
path = require('path'),
app = express();
app.set('port', process.argv[2] || process.env.PORT || 8080);

// using express satic to host my single index.html file
app.use('/', express.static( path.join(__dirname, 'public') ))

// using express.text to parse post requests for the root path
app.use('/', express.text());
app.post('/', (req, res) => {
    res.json({
        status: 'okay',
        body: req.body
    });
});

// listen on app port
app.listen(app.get('port'), () => {
    console.log('app up on port: ' + app.get('port'));
});
