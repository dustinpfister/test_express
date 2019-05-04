let express = require('express'),
app = express();

app.get('/', (req, res, next) => {

    throw new Error('My Custom Error');

});

app.use((err, req, res, next) => {
    let html = '<h1>Custom Error Handler<\/h1>' +
        '<p>ERROR MESSAGE: ' + err.message + '<\/p>' +
        '<p>STATUS CODE: ' + res.statusCode + '<\/p>';
    res.send(html);
});

app.listen(8080);
