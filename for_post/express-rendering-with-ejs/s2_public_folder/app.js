let express = require('express'),
path = require('path'),
app = express();
 
// getting port this way
app.set('port', process.env.PORT || process.argv[2] || 8080 );
app.set('public_html', path.resolve( __dirname, 'public') ));
 
// view engine setup
app.set('view engine', 'ejs'); // the render engine
app.set('views', path.resolve( __dirname, 'views') ); // the views folder for the *.ejs files

// a single path for /
app.get('/', [
    express.static( api.get('public_html') ),
    function (req, res) {
        res.render('index', {}); 
    }
);

// listen on the port app setting
app.listen(app.get('port'), function () {
    console.log('app is up on port: ' + app.get('port'));
});
