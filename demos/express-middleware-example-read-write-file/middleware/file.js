let express = require('express'),
fs = require('fs'),
dir_file = './file.txt';

router = module.exports = express.Router();
router.use(require('body-parser').json());

router.get('*', function (req, res) {

    fs.readFile(dir_file, 'utf-8', (e, text) => {

        if (e) {

            res.send('error reading file: ' + e.message);

        } else {

            res.send(text);

        }

    })

});

router.post('*', function (req, res) {

    fs.writeFile(dir_file, req.body.text, (e) => {

        res.send(JSON.stringify({
                e: e
            }))
    });

});
