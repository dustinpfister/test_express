let express = require('express'),

router = module.exports = express.Router();

router.use(require('cookie-parser')());

router.use(function (req, res, next) {

    // let my cookie be (or not be) here
    let mc = req.cookies._mc;

    // if not make it
    if (!mc) {

        // crude id gen for now
        let id = new Date().getTime().toString();
        res.cookie('_mc', id);
        req.cookies._mc = id;

    }

    next();

});
