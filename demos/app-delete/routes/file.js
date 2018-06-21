let express = require('express'),
path = require('path'),
fs = require('fs'),

app = module.exports = express();

app.set('file-path', path.join(__dirname, 'file.txt'));
app.set('mess', 'foo');

app.get('/file',

    // read file if there
    function (req, res, next) {

    fs.readFile(app.get('file-path'), 'utf8', function (e, data) {

        if (e) {

            app.set('mess', e.message);
            next();

        } else {

            res.json({

                mess: 'got the file',
                text: data.toString()

            })

        }

    });

},

    // if this far
    function (req,res) {

    res.json({

        mess: app.get('mess'),
        text: ''

    })

});
