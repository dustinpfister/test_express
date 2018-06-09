let express = require('express'),
http = require('http'),

port = process.env.PORT || process.argv[2] || 8888,
app = express();

app.use('/', express.static('public'));

app.use(require('body-parser').json());

app.post('/', function (req, res) {

    // make the post request
    let mReq = http.request({

            hostname: 'localhost',
            path: '/',
            port: 8080,
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            }

        }, function (microRes) {

            let data = '';

            microRes.on('data', function (chunk) {

                // expect json
                data += chunk.toString();

            });

            microRes.on('end', function () {

                res.json({

                    mess: 'response from micro service',
                    data: JSON.parse(data),
                    success: true

                });

            });

        });

    // if error
    mReq.on('error', function (e) {

        res.json({

            mess: 'ERROR: ' + e.message,
            success: false

        });

    });

    // write payload and end
    mReq.write(JSON.stringify(req.body));
    mReq.end();

});

// Start the APP if the micro service is running
let req = http.request({
        hostname: 'localhost',
        port: 8080,
        path: '/about'
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

                if (data.service_name === 'micro_keywords_logger') {

                    console.log('looks good lets listen on port: ' + port);

                    app.listen(port, function () {

                        console.log('micro_keywords_main is up on port: ' + port);

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
    console.log('This app needs mocro_keywords_logger running on port: 8080');
    console.log('The app WILL NOT listen, end of line bye');

});
req.end();
