let express = require('express'),
http = require('http'),

port = process.env.PORT || process.argv[2] || 8888,
app = express();

app.use('/', express.static('public'));

app.use(require('body-parser').json();

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

// Start the APP if the micro service is running
let req = http.request({
        hostname: 'localhost',
        port: 8080,
        path: '/'
    }, function (res) {

        let data = '';

        res.on('data', function (chunk) {

            data += chunk.toString();

        });

        res.on('end', function () {

            console.log('looks like we have a response, parsing what should be JSON.');

            try {

                data = JSON.parse(data);

                console.log(data);

                if (data.service_name === 'micro_img_scale') {

                    console.log('looks good lets listen on port: ' + port);

                    app.listen(port, function () {

                        console.log('micro_img_main is up on port: ' + port);

                    });

                } else {

                    console.log('not what I am looking for sorry');

                }

            } catch (e) {

                console.log(e.message);
                console.log('error parsing json response');

            }

        });

    });

// if error log message
req.on('error', function (e) {

    console.log('error: ' + e.message);
    console.log('This app needs mocro_img_scale running on port: 8080');
    console.log('The app WILL NOT listen, end of line bye');

});
req.end();
