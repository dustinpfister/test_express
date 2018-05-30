let express = require('express'),
app = express(),
port = process.env.PORT || process.argv[2] || 8080;

app.use('/', require('./routes/static'));

app.listen(port, function () {

    console.log('blog_clicker is up on port: ' + port);

});
