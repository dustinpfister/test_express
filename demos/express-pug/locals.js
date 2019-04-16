let express = require('express'),
app = express();
app.set('view engine', 'pug');

app.get('/', (req, res) => {
    // an object can be passed to the render
    // method that will pass local variables
    // than can then be used in the pug file
    res.render('locals', {
        foo: 'bar',
        n: 42
    });
});

app.listen(8080);
