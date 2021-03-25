let express = require('express'),
path = require('path'),
app = express();
 
// getting port this way
app.set('port', process.env.PORT || process.argv[2] || 8080 );
 
// view engine setup
app.set('view engine', 'ejs'); // the render engine
app.set('views', path.join( __dirname, 'views') ); // the views folder for the *.ejs files

// a single path for /
app.get('/', function (req, res) {
    // I can now use render to render the index ejs file
    // in views, for now I am give it an empty object
    // when it comes to data
    res.render('index', {}); 
});

// listen on the port app setting
app.listen(app.get('port'), function () {
    console.log('app is up on port: ' + app.get('port'));
});