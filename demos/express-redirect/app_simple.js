let express = require('express'),
app = express();

app.get('/', (req, res) => {

    res.send('you can not escape me');

});

app.get('*', (req, res) => res.redirect('/'));

app.listen(8080);
