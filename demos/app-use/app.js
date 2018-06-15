let express = require('express'),
app = express();

// custom middle ware that sets a req.useClient value
app.use(function (req, res, next) {

    let agent = req.get('user-agent').toLowerCase();

    req.useClient = 'generic';

    // use a bootstrap client, but only for chrome users
    if (agent.indexOf('chrome') > -1) {

        req.useClient = 'bootstrap';

    }

    next();

});

app.get('/', function (req, res) {

    res.send('so we will be useing the ' + req.useClient + ' client system.');

});

app.listen(8080, function () {

    console.log('the app is up on port 8080');

});
