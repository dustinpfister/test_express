let path = require('path'),
fs = require('fs');

// if action : 'list' - to list files in current dir
module.exports = [(req, res, next) => {
        if (req.body.action === 'list') {
            fs.readdir(path.resolve(res.app.get('dir')), (e, files) => {
                if (e) {
                    res.reply.mess = e.message;
                    res.status(400).json(res.reply);
                } else {
                    let i = 0,
                    len = files.length,
                    stepStat = () => {
                        i += 1;
                        if (i === len) {
                            res.reply.success = true;
                            res.reply.mess = 'list sent';
                            res.reply.data = files;
                            res.status(200).json(res.reply);
                        } else {
                            readStat();
                        }
                    },
                    readStat = () => {
                        fs.stat(path.join(res.app.get('dir'), files[i]), (e, stat) => {
                            if (stat) {
                                files[i] = {
                                    fn: files[i],
                                    dir: stat.isDirectory()
                                };
                            } else {
                                files[i] = {
                                    fn: files[i]
                                };
                            }
                            stepStat();
                        });
                    };
                    readStat();
                }
            });
        } else {
            next();
        }
    }
];
