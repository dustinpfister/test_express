let express = require('express'),
app = express();

app.get('/', function (req, res) {
    res.send('foo');
});

// app.listen can be used to have an app listen
// on a given port
app.listen(8080, function () {
    console.log('foo app is up on port 8080');
});
