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
    // set a req.platform prop based on user agent header
    (req, res, next) => {
        var userAgent = req.get('user-agent');
        // default to an 'Unkown platform'
        req.platform = 'Unkown';
        if(userAgent.match(/\(X11/)){
            req.platform = 'Linux';
        }
        if(userAgent.match(/\(Windows/)){
            req.platform = 'Windows';
        }
        if(userAgent.match(/\(Macintosh/)){
            req.platform = 'Macintosh';
        }
        next();
    }
]);

app.get('/', (req, res) => {
    res.send('Hello ' + req.platform + ' OS User');
});

// listen on app port
app.listen(app.get('port'), () => {
    console.log('app up on port: ' + app.get('port'));
});
