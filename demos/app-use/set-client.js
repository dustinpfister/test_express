let express = require('express'),

// export the app object
app = module.exports = express();

// custom middle ware that sets a req.useClient value
app.use(function (req, res, next) {

    let agent = req.get('user-agent').toLowerCase();

    // default to generic
    req.useClient = 'generic';

    // use a bootstrap client, but only for chrome users
    if (agent.indexOf('chrome') > -1) {

        req.useClient = 'bootstrap';

    }

    next();

});