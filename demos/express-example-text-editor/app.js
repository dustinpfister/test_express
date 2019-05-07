let express = require('express'),
path = require('path'),
fs = require('fs'),
app = express();

app.set('dir', process.cwd());
app.set('fn', 'newfile.txt');

app.set('port', process.argv[2] || process.env.PORT || 8080);
app.set('dir_mw', path.resolve('./middleware'));
app.set('encode', 'utf8');

// hosting static assets for the client system
app.use('/js', express.static('public/js'));
app.use('/', express.static('public/html'));

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
                mess: 'no body object populated.',
                //fn: app.get('fn'),
                //dir: app.get('dir')
            };

            // check for body or next
            if (!req.body) {
                res.status(400).json(res.reply);
            } else {
                // sync server side fn and dir settings to any settings given by client
                app.set('fn', req.body.fn || app.get('fn'));
                app.set('dir', path.resolve(req.body.dir || app.get('dir')));
                res.reply.fn = app.get('fn');
                res.reply.dir = app.get('dir');
                // next middleware
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
            if (req.body.action === 'open') {
                // try to open the current filename at the current dir
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

        // actions
        require(path.join(app.get('dir_mw'), 'action_save.js')),
        require(path.join(app.get('dir_mw'), 'action_list.js')),

        // unknown action
        (req, res, next) => {
            res.reply.mess = 'The action given is not known';
            res.status(400).json(res.reply);
        }

    ]);

app.listen(app.get('port'), () => console.log('example text editor is up on port: ' + app.get('port')));
