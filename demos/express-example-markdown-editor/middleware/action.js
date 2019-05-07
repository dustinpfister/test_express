let express = require('express'),
path = require('path'),
fs = require('fs'),
marked = require('marked'),

router = module.exports = express.Router();

router.use((req, res, next) => {

    try {

        let action = require('./action_' + req.body.action + '.js');

        action(req, res, next);

    } catch (e) {

        res.reply.mess = e.message;
        res.status(400).send(res.reply)

    }

});
