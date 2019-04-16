let express = require('express'),
app = express();

app.set('view engine', 'pug');

app.get('/', (req, res) => {

    res.render('index', {});

});

app.listen(8080);
