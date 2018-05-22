let express = require('express'),

router = module.exports = express.Router();

router.get('/', function (req, res) {

    res.render('index', {});

});

router.get('/about', function (req, res) {

    res.render('about', {});

});
