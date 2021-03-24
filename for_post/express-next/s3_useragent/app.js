let express = require('express'),
path = require('path'),
app = express();

app.set('port', process.argv[2] || process.env.PORT || 8080);

// use all_requests.js for '*' path
app.all('*', require( path.join(__dirname, 'all_requests.js') ))

app.get('/', (req, res) => {
    res.send('Hello ' + req.platform + ' OS User');
});

// listen on app port
app.listen(app.get('port'), () => {
    console.log('app up on port: ' + app.get('port'));
});
