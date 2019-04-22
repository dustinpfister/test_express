let express = require('express'),
app = express();

app.use((req, res, next) => {

    req.n = 42;
    next();

});

app.all('*', (req, res, next) => res.send(req.n + ''));

app.listen(8080);
