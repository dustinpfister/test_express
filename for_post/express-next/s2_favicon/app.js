let express = require('express'),
path = require('path'),
app = express();

app.set('port', process.argv[2] || process.env.PORT || 8080);

app.get('*', [
    // log request url to the console
    (req, res, next) => {
        console.log(req.url);
        next();
    },
    // send favicon file
    (req, res, next) => {
        // if the request is for /favicon, send a favicon.ico file for the request
        if(req.url.toLowerCase() === '/favicon.ico'){
            res.sendFile( path.join(__dirname, 'favicon.ico') );
        }else{
            next();
        }
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
