let express = require('express'),
path = require('path'),
fs = require('fs'),

app = module.exports = express();

app.use(require('body-parser').json());

app.post('/post',

    // check body
    function (req, res, next) {

        if (req.body) {

            if (req.body.mess) {

                next();

            }else{

                res.json({

                    mess: 'no message given',
                    body: req.body

                });

            }

        }else{

            res.json({

                mess: 'no body parsed',
                body: req.body

            });

        }

    },

    // write file
    function (req, res) {

        fs.writeFile(path.join(__dirname, 'file.txt'), req.body.mess, 'utf8', function (e) {

            var mess = 'looks good';
            if (e) {

                mess = e.message;

            }

            // respond
            res.json({

                mess: mess,
                body: req.body

            });

        });

    }

);
