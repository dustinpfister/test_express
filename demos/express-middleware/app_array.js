let express = require('express'),
fs = require('fs'),
app = express();
 
app.use([
        (req, res, next)=> {
            req.a = req.query.a || 0;
            req.b = req.query.b || 0;
            next();
        },
        (req, res, next)=> {
            req.n = Number(req.a) + Number(req.b);
            next();
        }
 
    ]);
 
app.get('/', (req, res)=> {
    res.json({
        a: req.a,
        b: req.b,
        n: req.n
    });
 
});
app.listen(8080);