let express = require('express'),

router = module.exports = express.Router();

router.get(/user_(\w+)/, function (req, res) {

    let username = req.url.match(/user_(\w+)/);

    res.render('user', {username: username[0]});

});

