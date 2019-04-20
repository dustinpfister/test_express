let express = require('express'),
fs = require('fs'),
dir_file = './file.txt';

router = module.exports = express.Router();

router.get('*', function (req, res, next) {

    fs.readFile(dir_file, 'utf-8', (e, text) => {

        if (e) {

            res.send('error reading file: ' + e.message);

        } else {

            res.send(text);

        }

    })

});

router.post('*', function (req, res, next) {

    console.log('post from: ' + req.url);

    next();

});
