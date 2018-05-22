let express = require('express'),

router = module.exports = express.Router();

router.get('*', function (req, res, next) {

    console.log('get from: ' + req.url);

    next();

});

router.post('*', function (req, res, next) {

    console.log('post from: ' + req.url);

    next();

});
