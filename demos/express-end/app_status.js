// https://en.wikipedia.org/wiki/List_of_HTTP_status_codes
let express = require('express'),
app = express();

// the res.end method does nothing to change
// the default http status code of 200 (OK)
app.get('/foo', (req, res) => {
    console.log(res.statusCode); // 200
    res.end();
    console.log(res.statusCode); // 200
});

// the res.status method can be used to change that
app.get('*', (req, res) => {
    console.log(res.statusCode); // 200
    res.status(404).end();
    console.log(res.statusCode); // 404
});

app.listen(8080);
