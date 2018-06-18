let express = require('express'),
app = express();

// using the custom middle ware
// to have a req.useClient value
app.use(require('./set-client.js'));

app.get('/', function (req, res) {

    res.send('so we will be useing the ' + req.useClient + ' client system.');

});

app.listen(8080, function () {

    console.log('the app is up on port 8080');

});
