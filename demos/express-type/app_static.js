let express = require('express'),
app = express();

app.use('/js', express.static('public/js', {
        extensions: ['.js'],
        index: false,
        setHeaders: (res, path, stat) => {
            res.type('js');
            console.log(res.get('Content-Type'));
            // application/javascript; charset=utf-8
        }
    }));

app.use('/', express.static('public/html', {
        extensions: ['.html'],
        setHeaders: (res, path, stat) => {
            res.type('html');
            console.log(res.get('Content-Type'));
            // text/html; charset=utf-8
        }
    }));

app.listen(8080);
