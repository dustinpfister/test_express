
let path = require('path'),
mkdirp = require('mkdirp'),
fs = require('fs');

// ensure a dir is there
let ensureDir = function (dir) {

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

// read the contents of the txt folder
let readTXTFolder = function (options) {

    return new Promise(function (resolve, reject) {

        fs.readdir(options.dir_txt, 'utf8', function (e, files) {

            if (e) {

                reject(e.message);

            } else {

                resolve(files)

            }

        });

    });

}

module.exports = function (options) {

    options = options || {};
    options.dir_txt = options.dir_txt || 'txt';

    // ensure text folder
    return ensureDir(options.dir_txt).then(function () {

        // return the functioning middle ware
        return function (req, res, next) {

            readTXTFolder(options).then(function (files) {

                req.middle = {

                    mess: 'got the filenames',
                    files: files

                };

                next();

            }).catch (function (eMess) {

                req.middle = {

                    mess: 'error',
                    eMess: eMess,
                    files: []

                };

                next();

            });

        }

    }).catch (function () {

        // return this if something goes wrong
        return function (req, res, next) {

            req.middle = {};

            next();

        };

    })

};
