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

    // if we have a body to send to the micro service
    if (req.body) {

        // make the post request
        let req = http.request({

                hostname: 'http://localhost',
				path: '/',
                port: 8080,
                method: 'POST'

            });

        // if error
        req.on('error', function (e) {

            res.json({

                mess: 'ERROR: ' + e.message,
                success: false

            });

        });

        // if good
        req.on('end', function () {

            res.json({

                mess: 'um... i think we did it',
                success: true

            });

        });

        // write payload and end
        req.write('foo');
        req.end();

    } else {

        // else we do not have a body to send
        res.json({

            success: false,
            mess: 'no body'

        });

    }

});

app.listen(port, function () {

    console.log('micro_img_main is up on port: ' + port);

});
