let express = require('express'),

router = module.exports = express.Router();

router.use(require('cookie-parser')());

router.use(function (req, res, next) {

    let bc = req.cookies._bc;

    if (!bc) {

        let id = new Date().getTime();

        res.cookie('_bc', id);

    }

    console.log(req.cookies);

    next();

});
