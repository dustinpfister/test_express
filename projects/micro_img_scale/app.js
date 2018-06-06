let express = require('express'),
jimp = require('jimp'),

port = process.env.PORT || process.argv[2] || 8080,

app = express();

app.use(require('body-parser').json());

app.post('/', function (req, res) {

    res.json({

        mess: 'okay'

    });

});

app.listen(port, function () {

    console.log('micro_imgscale is up on port: ' + port);

});
