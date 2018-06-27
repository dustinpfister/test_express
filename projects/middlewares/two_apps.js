let express = require('express'),
app = express();

app.use(require('./app_two.js')({
        foo: 'bar'
    }));

app.listen(8080);
