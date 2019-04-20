let express = require('express'),
app = express();

app.all('*', (req, res, next) => {
    if (req.method === 'GET') {
        res.send('foo');
    } else {
        next();
    }
});

app.all('*', (req, res) => {
    res.sendStatus(404);
});

app.listen(8080);
