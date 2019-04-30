let express = require('express'),
path = require('path'),
fs = require('fs'),
app = express();

app.set('dir', process.cwd());
app.set('fn', 'newfile.txt');
app.set('encode', 'utf8');

// hosting public folder
app.use('/', express.static('public'));

// body parser
app.use(require('body-parser').json());

// singe middleware that responds to post requests
app.post('/data',

    [

        // create reply object, and check for body
        (req, res, next) => {

            // Create reply object
            res.reply = {
                success: false,
                mess: 'no body object populated.'
            };

            // check for body or next
            if (!req.body) {
                res.status(400).json(res.reply);
            } else {
                next();
            }

        },

        // if no action
        (req, res, next) => {

            // If no action Action, or next
            if (!req.body.action) {
                res.reply.mess = 'An action must be given';
                res.status(400).json(res.reply);
            } else {
                next();
            }

        },

        // if action : 'open'
        (req, res, next) => {
            // if action is 'open'
            if (req.body.action === 'open') {
                fs.readFile(path.join(app.get('dir'), app.get('fn')), app.get('encode'), (e, data) => {
                    if (e) {
                        res.reply.mess = e.message;
                        res.status(400).json(res.reply);
                    } else {
                        res.reply.success = true;
                        res.reply.mess = 'opened and sent file data';
                        res.reply.data = data;
                        res.status(200).json(res.reply);
                    }
                });
            } else {
                next();
            }
        },

        // unkown action
        (req, res, next) => {
            res.reply.mess = 'The action given is not known';
            res.status(400).json(res.reply);
        }

    ]);

app.listen(8080);
