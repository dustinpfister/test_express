let express = require('express'),
app = express();

// express middleware basic example
app.use((req, res, next) => {
    req.rnd = Math.random() + '';
    next();
});

app.get('/', (req, res) => res.send(req.rnd));
app.listen(8080);
