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

// okay so a simple get request works if it is running
let req = http.request({
        hostname: 'localhost',
        port: 8080,
        path: '/'
    }, function (res) {

        res.on('data', function (chunk) {

            console.log(chunk.toString());

        });

        res.on('end', function () {

            console.log('looks like we have a response so...');

            app.listen(port, function () {

                console.log('micro_img_main is up on port: ' + port);

            });

        });

    });

req.on('end', function () {

    console.log('data');

});

req.on('error', function (e) {

    console.log('error: ' + e.message);

});
req.end();

app.post('/post', function (req, res) {

    // if we have a body to send to the micro service
    if (req.body) {

        // make the post request
        let req = http.request({

                hostname: 'localhost',
                path: '/',
                port: 8080,
                method: 'POST'

            }, function (microRes) {

                let data = '';

                microRes.on('data', function (chunk) {

                    // expect json
                    data += chunk.toString();

                });

                microRes.on('end', function () {

                    res.json({

                        mess: 'looks like we made it',
                        data: JSON.parse(data),
                        success: false

                    });

                });

            });

        // if error
        req.on('error', function (e) {

            res.json({

                mess: 'ERROR: ' + e.message,
                success: false

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
