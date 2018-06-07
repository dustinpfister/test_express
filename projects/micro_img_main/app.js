let express = require('express'),
http = require('http'),

port = process.env.PORT || process.argv[2] || 8888,
app = express();

app.use('/', express.static('public'));

app.use(require('body-parser').raw({

        limit: '1024kb',
        //type: 'application/json'
        type: 'image/png'

    }));

app.post('/post', function (req, res) {

    console.log(typeof req.body);

    if (req.body) {

        let req = http.request({

                host: 'http://localhost',
                port: 8080,
                method: 'POST'

            });

        req.on('error', function (e) {

            res.json({

                mess: 'okay error',
                success: true

            });

        });

        req.on('end', function (e) {

            res.json({

                mess: 'um... i think we did it',
                success: true

            });

        });

        req.write('foo');
        req.end();

        /*
        try {
        req.send();

        } catch (e) {

        res.json({

        mess: 'error tring to send to microtservice',
        success: false

        });

        }
         */

    } else {

        // no body
        res.json({

            success: false,
            mess: 'no body'

        });

    }

    /*
    req.on('data', function (chunk) {

    console.log(chunk.length);

    });
     */

    /*
    res.json({

    mess: 'check cmd'

    });

     */

});

app.listen(port, function () {

    console.log('micro_img_main is up on port: ' + port);

});
