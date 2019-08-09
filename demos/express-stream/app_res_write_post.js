let express = require('express'),
app = express(),
port = process.argv[2] || 8080;

app.use(express.static('./public'));

app.post('/', (req, res) => {

    res.write('foobar');
    res.write('foobar');
    res.write('foobar');
    res.end();

});

app.listen(port, () => {
    console.log('app is up on port ' + port);
});
