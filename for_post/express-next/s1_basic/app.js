let express = require('express'),
app = express();

app.set('port', process.argv[2] || process.env.PORT || 8080);

app.get('*', [
    // log request url to the console
    (req, res, next) => {
        console.log(req.url);
        next();
    },
    // send hello message
    (req, res) => {
        res.send('Hello User');
    }
]);

// listen on app port
app.listen(app.get('port'), () => {
    console.log('app up on port: ' + app.get('port'));
});
