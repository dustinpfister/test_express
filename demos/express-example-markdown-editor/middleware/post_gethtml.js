let express = require('express'),
path = require('path'),
fs = require('fs'),
marked = require('marked'),

router = module.exports = express.Router();

// send html of current markdown file
router.get('*', (req, res) => {

    let fn = req.app.get('fn'),
    dir = req.app.get('dir'),
    dir_md = path.join(dir, fn);

    // read current markdown file
    fs.readFile(dir_md, 'utf8', (e, md) => {
        if (e) {
            res.status(500).send(e.message);
        } else {
            // used marked to send html of markdown
            res.set('Content-Type', 'text/html');
            res.status(200).send(marked(md));
        }
    });

});
