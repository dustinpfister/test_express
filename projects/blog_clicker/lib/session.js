// user session data with express-session
let express = require('express'),

router = module.exports = express.Router();

router.use(require('express-session')({

        name: '_blog_clicker', // The name of the cookie
        secret: '1234', // The secret is required, and is used for signing cookies
        resave: false, // Force save of session for each request.
        saveUninitialized: false, // Save a session that is new, but has not been modified
        cookie: {

            maxAge: 1000 * 60

        }

    }));
