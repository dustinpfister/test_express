let express = require('express'),
path = require('path'),
fs = require('fs'),

app = module.exports = express();

app.set('file-path', path.join(__dirname, 'file.txt'));
app.set('mess', '');

app.delete ('/file', function (req, res, next) {

    fs.unlink(app.get('file-path'), function (e) {

        if (e) {

            app.set('mess', e.message);
            next();

        } else {

            res.json({

                mess: 'file deleted',
                path: app.get('file-path')

            });

        }

    });

}, function (req, res) {

    res.json({

        mess: app.get('mess')

    });

});
