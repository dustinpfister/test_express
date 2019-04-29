let express = require('express'),
app = express();

// default status code is 200 (OK)
app.get('/', (req, res) => {
    res.send('status: ' + res.statusCode); // status: 200
});

app.listen(8080);
