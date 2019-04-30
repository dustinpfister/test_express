let express = require('express'),
app = express();

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

        // unkown action
        (req, res, next) => {
            res.mess = 'The action given is not known';
            res.status(400).json(res.reply);
        }

    ]);

app.listen(8080);
