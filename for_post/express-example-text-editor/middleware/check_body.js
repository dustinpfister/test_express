let path = require('path'),
fs = require('fs');

// create reply object, and check for body
module.exports = [

    (req, res, next) => {

        // Create reply object
        res.reply = {
            success: false,
            mess: 'no body object populated.',
        };

        // check for body or next
        if (!req.body) {
            res.status(400).json(res.reply);
        } else {
            // sync server side fn and dir settings to any settings given by client
            res.app.set('fn', req.body.fn || res.app.get('fn'));
            res.app.set('dir', path.resolve(req.body.dir || res.app.get('dir')));
            res.reply.fn = res.app.get('fn');
            res.reply.dir = res.app.get('dir');
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
    }
]
