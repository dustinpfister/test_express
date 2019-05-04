let express = require('express'),
fs = require('fs'),
app = express();

app.get('/', (req, res, next) => {
    fs.readFile('./nofile.txt', 'utf8', (err, data) => {
        if (err) {
            next(err);
        } else {
            res.send(data);
        }
    })
});

app.use((err, req, res, next) => {

    res.status(500);

    let html = '<h1>500 Interal Service Error<\/h1>' +
        '<p>ERROR MESSAGE: ' + err.message + '<\/p>' +
        '<p>STATUS CODE: ' + res.statusCode + '<\/p>';

    res.send(html); // 'My Custom Error'

});

app.listen(8080);
