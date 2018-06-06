let express = require('express'),

port = process.env.PORT || process.argv[2] || 8888,
app = express();

app.use('/', express.static('public'));

app.listen(port, function () {

    console.log('micro_img_main is up on port: ' + port);

});
