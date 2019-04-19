let express = require('express'),
app = express();
// express middleware can be chained like this
app.use(
    (req, res, next) => {
        req.rnd = Math.random();
        next();
    },
    (req, res, next) => {
        req.n = Math.floor(req.rnd * 90) + 10;
        next();
    }
);
app.get('/', (req, res) => res.send(req.n + ''));
app.listen(8080);
