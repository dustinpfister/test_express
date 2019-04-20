let express = require('express'),
fs = require('fs'),
dir_file = './file.txt';

// create a router, and use body-parser
router = module.exports = express.Router();
router.use(require('body-parser').json());

// what to do for GET and Post requests
router.get('*', function (req, res) {
    fs.readFile(dir_file, 'utf-8', (e, text) => {
        if (e) {
            res.send('');
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
