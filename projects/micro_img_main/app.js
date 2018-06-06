let express = require('express'),

port = process.env.PORT || process.argv[2] || 8888,
app = express();

app.use('/', express.static('public'));

app.use(require('body-parser').raw({

        limit: '1024kb',
        type: 'application/json'

    }));

app.post('/post', function (req, res) {

    console.log(req.body);

/*
    req.on('data', function (chunk) {

        console.log(chunk.toString());

    });
*/

    res.json({

        mess: 'check cmd'

    });

});

app.listen(port, function () {

    console.log('micro_img_main is up on port: ' + port);

});
