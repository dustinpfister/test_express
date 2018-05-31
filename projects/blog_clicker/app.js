let express = require('express'),
app = express(),
port = process.env.PORT || process.argv[2] || 8080;

// a login path
app.use('/login', require('./routes/login'));

app.use('/posts', require('./routes/posts'));

// static path for index.js, and other files
app.use('/', require('./routes/static'));

app.listen(port, function () {

    console.log('blog_clicker is up on port: ' + port);

});
