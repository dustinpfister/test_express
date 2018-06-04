let express = require('express'),
path = require('path'),
app = express(),
port = process.env.PORT || process.argv[2] || 8080;

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// a login path
app.use('/login', require('./routes/login'));
app.use('/posts', require('./routes/posts'));

// static path for /js, /css, and /fonts
app.use('/', require('./routes/static'));

app.get('/', function (req, res) {

    res.render('index', {
        layout: 'word'
    });

});

app.listen(port, function () {

    console.log('blog_clicker is up on port: ' + port);

});
