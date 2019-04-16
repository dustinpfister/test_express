let express = require('express'),
app = express();
app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render('locals', {
        foo: 'bar',
        n: 42
    });
});

app.listen(8080);
