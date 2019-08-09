let express = require('express'),
app = express(),
port = process.argv[2] || 8080;

app.get('/', (req, res) => {

    res.write('yes');
    res.end();

});

app.listen(port, () => {
    console.log('app id up on port ' + port);
});
