let express = require('express'),

router = module.exports = express.Router();

router.get(/user_(\w+)/, function (req, res) {

    let match = req.url.match(/user_(\w+)/),
    username;

    if (match) {

        username = match[0].replace(/^user_/,'');

    }

    if (username) {

        res.render('user', {
            username: username
        });

    } else {

        res.send('no username!?');

    }

});
