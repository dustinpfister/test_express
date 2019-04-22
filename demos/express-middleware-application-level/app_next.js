let express = require('express'),
app = express();

app.get('*', (req, res, next) => {
    console.log('incoming get request for path: ' + req.path);
    next();
});

app.get('/', (req, res) => {
    res.send('foo');
});

app.listen(8080);
