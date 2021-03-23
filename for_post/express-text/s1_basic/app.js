let express = require('express'),
path = require('path'),
app = express();

app.set('port', process.argv[2] || process.env.PORT || 8080);

app.use('/', express.static( path.join(__dirname, 'public') ))

app.use('/', express.text());
app.post('/', (req, res) => {

    console.log(req.body);

    res.json({
        status: 'okay',
        body: req.body
    });

});

// listen
app.listen(app.get('port'), () => {
    console.log('app up on port: ' + app.get('port'));
});
