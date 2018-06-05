let express = require('express'),

router = module.exports = express.Router();

// check for user
router.use(function (req, res, next) {

    if (req.method === 'GET') {

        if (!req.user) {

            // go to login for some paths
            if (req.path === '/' || req.path === '/word') {

                res.redirect('/login');

            } else {

                next();

            }

        } else {

            next();

        }

    } else {

        next();

    }

});
