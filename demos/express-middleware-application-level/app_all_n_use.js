let express = require('express'),
app = express();

app.use('/foo', (req, res, next) => {

    req.a = 40;
    next();

});

app.all('/foo', (req, res, next) => {

    req.b = 2;
    next();

});

app.all('*', (req, res, next) => {

    req.a = req.a || 0;
    req.b = req.b || 0;

    res.send(req.a + req.b + '');
});

app.listen(8080);

// http://localhost:8080/         <-- 0
// http://localhost:8080/foo      <-- 42
// http://localhost:8080/foo/bar  <-- 40
