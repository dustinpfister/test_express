let express = require('express'),
path = require('path'),
app = express(),

middleware = require('./middleware');

middleware({
    dir_txt: path.join(__dirname, 'txt')
}).then(function (mw) {

    app.use(mw);

    app.get('/', function (req, res) {

        res.json({

            mess: 'foo'

        });

    });

    app.listen(8080, function () {

        console.log('app is live');

    });

});
