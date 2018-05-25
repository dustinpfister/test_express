let express = require('express'),
path = require('path'),
app = express(),

// getting port this way
port = process.env.PORT || process.argv[2] || 8080;

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// set up a static path
app.use('/static', express.static('public'));

app.get('/', function (req, res) {

    res.render('index',{});

});

app.get('*', function(req,res){

    res.render('404',{});

});

app.listen(port, function () {

    console.log('app is up on port: ' + port);

});
