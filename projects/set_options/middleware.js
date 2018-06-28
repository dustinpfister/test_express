
let path = require('path'),
mkdirp = require('mkdirp'),
fs = require('fs'),

ensureDir = function (dir) {

    return new Promise(function (resolve, reject) {

        mkdirp(dir, function (e) {

            if (e) {

                reject(e.message);

            } else {

                resolve();

            }

        });

    });

};

module.exports = function (options) {

    options = options || {};
    options.dir_txt = options.dir_txt || 'txt';

    // ensure text folder
    return ensureDir(options.dir_txt).then(function () {

        // return the functioning middle ware
        return function (req, res,next) {

            req.middle = {

                mess: 'foo'

            };

            next();

        }

    }).catch (function () {

        // return this if something goes wrong
        return function (req, res, next) {

            req.middle = {};

            next();

        };

    })

};
