let express = require('express'),
app = express();

app.use((req, res, next) => {
    // populating something  on req
    req.plat = {
        platform: process.platform,
        arch: process.arch
    };
    // call next to continue
    next();
});

app.get('/', (req, res) => res.json(req.plat));

app.listen(8080);
